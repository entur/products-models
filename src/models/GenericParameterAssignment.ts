import {
  ChargingBasisType,
  ComparisonOperator,
  GpaComparisonOperatorVariant,
  LogicalOperator,
  LogicalOperatorWithNone,
  RequiredElement,
  RequiredInContext,
  RequiredType,
  SetOperator,
  State
} from '../types/enums';
import { GenericParameterAssignmentData } from '../types/interfaces';
import {
  BucketStateType,
  GenericParameterAssignmentUsesType
} from '../types/types';
import { getThingInBucketByRef } from '../utils/get-thing-in-bucket-by-ref';
import { isEmpty } from '../utils/is-empty';

import AvailabilityCondition from './AvailabilityCondition';
import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import Reference from './Reference';
import ScopingValidityParameter from './ScopingValidityParameter';
import TemporalValidityParameter from './TemporalValidityParameter';
import ValidBetween from './ValidBetween';

const NAME_OF_CLASS = 'GenericParameterAssignment';

class GenericParameterAssignment extends BaseModel {
  limitations: Reference[];
  limitationGroupingType?: LogicalOperator;
  validityParameters: ScopingValidityParameter[];
  validityParameterGroupingType?: LogicalOperatorWithNone;
  validityParameterAssignmentType: ComparisonOperator;
  temporalValidityParameters: TemporalValidityParameter[];
  includes: GenericParameterAssignment[];
  includesGroupingType: LogicalOperator;
  chargingBasisType?: ChargingBasisType;
  state?: State;
  uses: GenericParameterAssignmentUsesType;
  limitationType?: string;
  fareStructureElementRef?: Reference;
  requiredType?: RequiredType;
  requiredInContext?: RequiredInContext;
  validityParameterSetSelectionType?: SetOperator;
  requiredElements?: Array<RequiredElement>;
  canIgnoreInOffering?: boolean;
  comparisonOperatorVariant: GpaComparisonOperatorVariant;

  constructor(data: Partial<GenericParameterAssignmentData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      limitations = [],
      validityParameters = [],
      validityParameterGroupingType = LogicalOperatorWithNone.NONE,
      validityParameterAssignmentType = ComparisonOperator.EQ,
      temporalValidityParameters = [],
      includes = [],
      includesGroupingType = LogicalOperator.OR
    } = data;

    this.limitations = limitations.map((l) => new Reference(l));
    this.limitationGroupingType = data.id
      ? data.limitationGroupingType
      : LogicalOperator.OR;
    this.validityParameters = validityParameters.map(
      (vp) => new ScopingValidityParameter({ ...vp, version: this.version })
    );
    this.validityParameterGroupingType = validityParameterGroupingType;
    this.validityParameterAssignmentType = validityParameterAssignmentType;
    this.temporalValidityParameters = temporalValidityParameters.map(
      (tvp) => new TemporalValidityParameter({ ...tvp, version: this.version })
    );
    this.includes = includes.map((i) => new GenericParameterAssignment(i));
    this.includesGroupingType = includesGroupingType;
    this.uses = data.uses || this.getUses(data);

    const hasFareClassinPA =
      this.validityParameters.some(
        (validityParameter) => validityParameter.fareClasses.length > 0
      ) || this.uses.useFareClass;

    this.chargingBasisType = hasFareClassinPA
      ? ChargingBasisType.NORMAL
      : data.chargingBasisType;

    this.state = data.state;
    this.limitationType =
      data.limitationType ||
      (limitations.length === 0 &&
        (validityParameters.length > 0 ||
          (temporalValidityParameters.length > 0 &&
            temporalValidityParameters[0].validityConditionRef?.ref)))
        ? 'scoping'
        : undefined;
    this.fareStructureElementRef = data.fareStructureElementRef;
    this.requiredType = data.requiredType;
    this.requiredInContext = data.requiredInContext;
    this.validityParameterSetSelectionType =
      data.validityParameterSetSelectionType;
    this.requiredElements = data.requiredElements;
    this.canIgnoreInOffering = data.canIgnoreInOffering;
    this.comparisonOperatorVariant =
      data.comparisonOperatorVariant || GpaComparisonOperatorVariant.A;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  hasAnyUses() {
    return Object.values(this.uses).some(Boolean);
  }

  hasValidBetween() {
    return (
      this.temporalValidityParameters.some(
        (tvp) =>
          tvp.validityConditionRef &&
          tvp.validityConditionRef.nameOfClass === ValidBetween.getNameOfClass()
      ) || this.uses.useValidBetween
    );
  }

  hasAvailabilityCondition() {
    return (
      this.temporalValidityParameters.some(
        (tvp) =>
          tvp.validityConditionRef &&
          (tvp.validityConditionRef.nameOfClass ===
            AvailabilityCondition.getNameOfClass() ||
            tvp.validityConditionRef.nameOfClass === 'AvailabilityCondidtion') // Hack for typo in backend
      ) || this.uses.useAvailabilityCondition
    );
  }

  hasEditableTemporalValidityParameter() {
    return this.hasValidBetween() || this.hasAvailabilityCondition();
  }

  isContextOnly() {
    return (
      this.requiredType &&
      this.requiredInContext &&
      this.limitations.length === 0
    );
  }

  addLimitationRef(ref: Reference) {
    const limitations = this.limitations.concat(ref);

    return this.withChanges({ limitations });
  }

  removeLimitationRef(ref: Reference) {
    const limitations = this.limitations.filter((l) => l.ref !== ref.ref);

    return this.withChanges({ limitations });
  }

  withValidityParameters(validityParameters: Array<ScopingValidityParameter>) {
    return this.withChanges({ validityParameters });
  }
  addValidityParameter(validityParameter: ScopingValidityParameter) {
    return this.withChanges({
      validityParameters: this.validityParameters.concat(validityParameter)
    });
  }

  updateValidityParameter(validityParameter: ScopingValidityParameter) {
    return this.withChanges({
      validityParameters: this.validityParameters.map((vp) =>
        vp.id === validityParameter.id ? validityParameter : vp
      )
    });
  }

  removeValidityParameterById(validityParameterId: string) {
    return this.withChanges({
      validityParameters: this.validityParameters.filter(
        (vp) => vp.id !== validityParameterId
      )
    });
  }

  withValidityParameterValues(
    type: keyof ScopingValidityParameter,
    values: Array<string> | Array<Array<string>>
  ) {
    const filteredValues =
      type === 'fareClasses'
        ? (values as Array<Array<string>>).filter(
          (value: Array<string>) => value !== undefined
        )
        : (values as Array<string>).filter(
          (value: string) => value !== undefined
        );
    const validityParameters = this.validityParameters
      .filter((vp) => !vp[type] || isEmpty(vp[type]))
      .concat(
        filteredValues.map(
          (v: string | Array<string>) =>
            new ScopingValidityParameter({
              codeSpace: this.codeSpace,
              version: this.version,
              [type]: v
            })
        )
      );

    let chargingBasisType = this.chargingBasisType;

    if (type === 'fareClasses') {
      const hasFareClassinPA = validityParameters.some(
        (validityParameter) => validityParameter.fareClasses.length > 0
      );

      chargingBasisType = hasFareClassinPA
        ? ChargingBasisType.NORMAL
        : undefined;
    }

    return this.withChanges({ validityParameters, chargingBasisType });
  }

  addSubGpa(subGpa: GenericParameterAssignment) {
    return this.withChanges({ includes: [...this.includes, subGpa] });
  }

  addSubGpas(subGpas: Array<GenericParameterAssignment>) {
    return this.withChanges({ includes: [...this.includes, ...subGpas] });
  }

  updateSubGpa(index: number, subGpa: GenericParameterAssignment) {
    const includes = [
      ...this.includes.slice(0, index),
      subGpa,
      ...this.includes.slice(index + 1)
    ];

    return this.withChanges({ includes });
  }

  removeSubGpa(subGpa: GenericParameterAssignment) {
    const includes = this.includes.filter((g) => g !== subGpa);

    return this.withChanges({ includes });
  }

  swapSubGpas(fromIndex: number, toIndex: number) {
    const temp = this.includes[fromIndex];
    const includes = [
      ...this.includes.slice(0, fromIndex),
      this.includes[toIndex],
      ...this.includes.slice(fromIndex + 1)
    ];

    includes[toIndex] = temp;

    return this.withChanges({ includes });
  }

  withVersion(version: string): this {
    return super.withVersion(version).withChanges({
      validityParameters: this.validityParameters.map((vp) =>
        vp.withVersion(version)
      ),
      includes: this.includes.map((i) => i.withVersion(version)),
      temporalValidityParameters: this.temporalValidityParameters.map((tvp) =>
        tvp.withVersion(version)
      )
    });
  }

  updateRefs(bucket: BucketStateType) {
    return this.withChanges({
      limitations: this.limitations.map((limitation) =>
        getThingInBucketByRef(bucket, limitation)
          ? getThingInBucketByRef(bucket, limitation)?.instance.toRef()
          : limitation
      )
    });
  }

  isEmpty() {
    return (
      this.includes.length === 0 &&
      this.limitations.length === 0 &&
      this.validityParameters.length === 0 &&
      this.temporalValidityParameters.length === 0 &&
      !this.requiredType
    );
  }

  private getUses(
    gpaData: Partial<GenericParameterAssignmentData>
  ): GenericParameterAssignmentUsesType {
    return {
      useAuthorities: !!gpaData.validityParameters?.some(
        (vp) => !!vp.authorityRef
      ),
      useOperators: !!gpaData.validityParameters?.some(
        (vp) => !!vp.operatorRef
      ),
      useLines: !!gpaData.validityParameters?.some((vp) => !!vp.lineRef),
      useZones: !!gpaData.validityParameters?.some((vp) => !!vp.tariffZoneRef),
      useDates: false,
      useDays: false,
      useTimes: false,
      useFareClass: !!gpaData.validityParameters?.some(
        (vp) => vp.fareClasses && vp.fareClasses.length > 0
      ),
      useFareSection: !!gpaData.validityParameters?.some(
        (vp) => !!vp.fareSectionRef
      ),
      useVehicleMode: !!gpaData.validityParameters?.some(
        (vp) => !!vp.vehicleMode
      ),
      useValidBetween: !!gpaData.temporalValidityParameters?.some(
        (tvp) =>
          tvp.validityConditionRef &&
          tvp.validityConditionRef.nameOfClass === ValidBetween.getNameOfClass()
      ),
      useTransportSubmode: !!gpaData.validityParameters?.some(
        (vp) => !!vp.transportSubmode
      ),
      useDistributionChannels: !!gpaData.validityParameters?.some(
        (vp) => !!vp.distributionChannelRef
      ),
      useServiceFacilitySet: !!gpaData.validityParameters?.some(
        (vp) => !!vp.facilitySetRef
      ),
      useGroupOfTariffZones: !!gpaData.validityParameters?.some(
        (vp) => !!vp.groupOfTariffZonesRef
      ),
      useGroupOfLines: !!gpaData.validityParameters?.some(
        (vp) => !!vp.groupOfLinesRef
      ),
      useScheduledStopPointRef: !!gpaData.validityParameters?.some(
        (vp) => !!vp.scheduledStopPointRef
      ),
      useContextTypeWithServiceJourneyRef: !!(
        gpaData.requiredInContext &&
        gpaData.requiredType === RequiredType.SERVICE_JOURNEY_REF
      ),
      useContextTypeWithDatedServiceJourneyRef: !!(
        gpaData.requiredInContext &&
        gpaData.requiredType === RequiredType.DATED_SERVICE_JOURNEY_REF
      ),
      useContextTypeWithDistanceMatrixElementRef: !!(
        gpaData.requiredInContext &&
        gpaData.requiredType === RequiredType.DISTANCE_MATRIX_ELEMENT_REF
      ),
      useContextTypeWithDynamicDistanceMatrixElement: !!(
        gpaData.requiredInContext &&
        gpaData.requiredType === RequiredType.DYNAMIC_DISTANCE_MATRIX_ELEMENT
      ),
      useContextTypeWithScheduledStopPointRef: !!(
        gpaData.requiredInContext &&
        gpaData.requiredType === RequiredType.SCHEDULED_STOP_POINT_REF
      ),
      useAvailabilityCondition: !!gpaData.temporalValidityParameters?.some(
        (tvp) =>
          tvp.validityConditionRef &&
          (tvp.validityConditionRef.nameOfClass ===
            AvailabilityCondition.getNameOfClass() ||
            tvp.validityConditionRef.nameOfClass === 'AvailabilityCondidtion') // Hack for typo in backend
      )
    };
  }

  toPayload(fareFrame: FareFrame) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gpaPayload: any = super.toPayload(fareFrame).withChanges({
      validityParameters: this.validityParameters.map((vp) =>
        vp.toPayload(fareFrame)
      ),
      temporalValidityParameters: this.temporalValidityParameters.map((tvp) =>
        tvp.toPayload(fareFrame)
      ),
      includes: this.includes.map((i) => i.toPayload(fareFrame))
    });

    if (!gpaPayload.requiredInContext) {
      delete gpaPayload.requiredType;
    }

    delete gpaPayload.state;
    delete gpaPayload.uses;
    delete gpaPayload.limitationType;

    if (
      gpaPayload.validityParameterGroupingType === LogicalOperatorWithNone.NONE
    ) {
      delete gpaPayload.validityParameterGroupingType;
    }

    return gpaPayload;
  }
}

export default GenericParameterAssignment;

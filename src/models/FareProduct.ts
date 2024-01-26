
import { FareStructureType } from '../types/enums';
import { FareProductData } from '../types/interfaces';
import { BucketStateType} from '../types/types';
import { generateId } from '../utils/generate-id';
import { getThingInBucketByRef } from '../utils/get-thing-in-bucket-by-ref';

import AccessRightInProduct from './AccessRightInProduct';
import ChargingMoment from './ChargingMoment';
import ConditionSummary from './ConditionSummary';
import Dorito from './Dorito';
import FareFrame from './FareFrame';
import Reference from './Reference';
import ValidableElement from './ValidableElement';
import Version from './Version';

const NAME_OF_CLASS = 'FareProduct';


class FareProduct extends Dorito {
  accessRightsInProduct: AccessRightInProduct[];
  fareStructureType?: FareStructureType;
  operatorRef?: string;
  organisation?: string;
  organisationId?: string;
  chargingMoment?: ChargingMoment;
  chargingMomentRef?: Reference;
  conditionSummary?: ConditionSummary;
  fareTableRefs: Array<Reference>;

  constructor(data: Partial<FareProductData> = {}) {
    super(data);

    this.name = data.name || [];
    this.description = data.description || [];

    this.accessRightsInProduct = (data.accessRightsInProduct || []).map(
      (arip: AccessRightInProduct) => new AccessRightInProduct(arip)
    );
    this.fareStructureType = data.fareStructureType;
    this.operatorRef = data.operatorRef;
    this.organisation = data.organisation;

    //TODO: Remove when POP API doest not send and recieve different field for the same thing.
    this.organisationId = data.organisation;

    this.chargingMoment = data.chargingMoment
      ? new ChargingMoment(data.chargingMoment)
      : undefined;

    if (data.chargingMoment) {
      this.chargingMomentRef = new Reference(data.chargingMoment);
    }

    this.conditionSummary = data?.conditionSummary
      ? new ConditionSummary({
        id:
            data.conditionSummary.id ??
            generateId(this.codeSpace, ConditionSummary.getNameOfClass()),
        isExchangeable: data.conditionSummary.isExchangeable,
        isRefundable: data.conditionSummary.isRefundable
      })
      : undefined;

    this.fareTableRefs = (data.fareTableRefs || []).map(
      (ft) => new Reference(ft)
    );
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  addValidableElement(validableElement: ValidableElement) {
    const accessRightsInProduct = this.accessRightsInProduct.concat(
      new AccessRightInProduct({
        version: this.version,
        codeSpace: this.codeSpace,
        preassignedFareProductRef: this.toRef(),
        validableElementRef: validableElement.toRef()
      })
    );

    return this.withChanges({ accessRightsInProduct });
  }

  removeValidableElementById(validableElementId: string) {
    const accessRightsInProduct = this.accessRightsInProduct.filter(
      (arip) => arip.validableElementRef.ref !== validableElementId
    );

    return this.withChanges({ accessRightsInProduct });
  }

  getValidableElementRefs() {
    return this.accessRightsInProduct.map((arip) => arip.validableElementRef);
  }

  changeOrderOfAccessRightsInProduct(
    accessRightInProduct: AccessRightInProduct,
    accessNumber: number
  ) {
    const aripAboutToBeChanged = this.accessRightsInProduct.find(
      (arip: AccessRightInProduct) => arip.id === accessRightInProduct.id
    );

    if (aripAboutToBeChanged) {
      aripAboutToBeChanged.accessNumber = accessNumber;

      return this.withChanges({
        accessRightsInProduct: this.accessRightsInProduct
      });
    }

    return this;
  }

  setMinimumAccessForAccessRightInProduct(
    accessRightInProduct: AccessRightInProduct,
    minimumAccess: 0 | 1
  ) {
    const aripAboutToBeChanged = this.accessRightsInProduct.find(
      (arip: AccessRightInProduct) => arip.id === accessRightInProduct.id
    );

    if (aripAboutToBeChanged) {
      aripAboutToBeChanged.minimumAccess = minimumAccess;

      return this.withChanges({
        accessRightsInProduct: this.accessRightsInProduct
      });
    }

    return this;
  }

  aripHasSameDatesAndStatus(
    versions: { [p: string]: Version },
    arip: AccessRightInProduct,
    fpVersion?: string
  ) {
    const aripVersion = versions[arip.validableElementRef.version];
    const myVersion = fpVersion ? versions[fpVersion] : undefined;

    return (
      !aripVersion ||
      !aripVersion.status ||
      (aripVersion.startDate === myVersion?.startDate &&
        aripVersion.endDate === myVersion?.endDate &&
        aripVersion.status === myVersion?.status)
    );
  }

  getValidableElementRefsWithEqualDatesAndStatus(versions: {
    [versionKey: string]: Version;
  }) {
    return this.accessRightsInProduct
      .filter((arip: AccessRightInProduct) =>
        this.aripHasSameDatesAndStatus(versions, arip, this.version)
      )
      .map((arip: AccessRightInProduct) => arip.validableElementRef);
  }

  getValidableElementRefsWithUnequalDatesAndStatus(versions: {
    [versionKey: string]: Version;
  }) {
    return this.accessRightsInProduct
      .filter(
        (arip: AccessRightInProduct) =>
          !this.aripHasSameDatesAndStatus(versions, arip, this.version)
      )
      .map((arip: AccessRightInProduct) => arip.validableElementRef);
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      accessRightsInProduct: this.accessRightsInProduct.map(
        (arip: AccessRightInProduct) => arip.withVersion(version)
      ),
      chargingMoment: this.chargingMoment
        ? this.chargingMoment.withVersion(version)
        : undefined,
      chargingMomentRef: this.chargingMomentRef
        ? { ...this.chargingMomentRef, version }
        : undefined
    });
  }

  updateRefs(bucket: BucketStateType) {
    return super.updateRefs(bucket).withChanges({
      accessRightsInProduct: this.accessRightsInProduct.map(
        (arip: AccessRightInProduct) => arip.updateRefs(bucket)
      ),
      chargingMomentRef: this.updateRef('chargingMomentRef', bucket),
      fareTableRefs: this.fareTableRefs.map((ref) =>
        getThingInBucketByRef(bucket, ref)
          ? getThingInBucketByRef(bucket, ref)?.instance.toRef()
          : ref
      )
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      accessRightsInProduct: this.accessRightsInProduct.map(
        (arip: AccessRightInProduct) => arip.toPayload(fareFrame)
      ),
      chargingMoment: this.chargingMoment?.toPayload(fareFrame)
    });
  }
}

export default FareProduct;

import {
  GpaComparisonOperatorVariant,
  InterchangeRestrictionType
} from '../types/enums';
import { ProductPriorityRuleData } from '../types/interfaces';
import { InfoLink } from '../types/types';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import GenericParameterAssignment from './GenericParameterAssignment';
import Reference from './Reference';

const NAME_OF_CLASS = 'ProductPriorityRule';

class ProductPriorityRule extends BaseModel {
  organisationId?: string;
  commercialAgreementRef?: string;
  priorityProductRef?: Reference;
  suppressedProductRefs?: Reference[];
  ancillaryProductRefs?: Reference[];
  interchangeRestrictionType?: InterchangeRestrictionType;
  allowOverlappingAlternatives?: boolean;
  validityConditionRef?: Reference;
  infoLinks?: InfoLink[];
  validityParameterAssignments?: GenericParameterAssignment[];
  activeComparisonOperatorVariant?: GpaComparisonOperatorVariant;
  constructor(data: Partial<ProductPriorityRuleData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      name,
      description,
      organisationId,
      commercialAgreementRef,
      priorityProductRef,
      suppressedProductRefs,
      ancillaryProductRefs,
      interchangeRestrictionType,
      allowOverlappingAlternatives,
      validityConditionRef,
      infoLinks,
      validityParameterAssignments,
      activeComparisonOperatorVariant
    } = data;

    this.name = name || [];
    this.description = description || [];

    this.organisationId = organisationId;
    this.commercialAgreementRef = commercialAgreementRef;
    this.priorityProductRef = priorityProductRef;

    this.validityConditionRef = new Reference({
      nameOfClass: validityConditionRef?.nameOfClass,
      ref: validityConditionRef?.ref,
      version: validityConditionRef?.version
    });

    this.suppressedProductRefs =
      suppressedProductRefs?.map((sRef) => {
        return new Reference({
          nameOfClass: sRef?.nameOfClass,
          ref: sRef?.ref,
          version: sRef?.version
        });
      }) ?? [];
    this.ancillaryProductRefs =
      ancillaryProductRefs?.map((aRef) => {
        return new Reference({
          nameOfClass: aRef?.nameOfClass,
          ref: aRef?.ref,
          version: aRef?.version
        });
      }) ?? [];
    this.interchangeRestrictionType =
      interchangeRestrictionType ||
      InterchangeRestrictionType.ALLOW_ON_REPLACEMENT;

    this.allowOverlappingAlternatives =
      typeof allowOverlappingAlternatives === 'boolean'
        ? allowOverlappingAlternatives
        : true;
    this.infoLinks = infoLinks;
    this.validityParameterAssignments = (
      validityParameterAssignments ?? []
    ).map((gpa) => new GenericParameterAssignment(gpa));

    this.activeComparisonOperatorVariant =
      activeComparisonOperatorVariant ?? GpaComparisonOperatorVariant.E;
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      validityParameterAssignments: this.validityParameterAssignments?.map(
        (vpa) => vpa.toPayload(fareFrame)
      )
    });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default ProductPriorityRule;

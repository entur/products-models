import { GpaComparisonOperatorVariant } from '../types/enums';
import { DoritoData } from '../types/interfaces';
import { BucketStateType } from '../types/types';
import { getAccessRightParameterAssignmentRefs } from '../utils/get-access-right-parameter-assignment-refs';
import { getThingInBucketByRef } from '../utils/get-thing-in-bucket-by-ref';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import GenericParameterAssignment from './GenericParameterAssignment';
import Reference from './Reference';

abstract class Dorito extends BaseModel {
  accessRightParameterAssignmentRefs: Reference[];
  accessRightParameterAssignments: GenericParameterAssignment[];
  prices: FarePrice[];
  activeComparisonOperatorVariant: GpaComparisonOperatorVariant;

  protected constructor(data: Partial<DoritoData> = {}) {
    super(data);

    this.accessRightParameterAssignmentRefs =
      getAccessRightParameterAssignmentRefs(data);
    this.accessRightParameterAssignments = (
      data.accessRightParameterAssignments || []
    ).map((gpa) => new GenericParameterAssignment(gpa));
    this.removeAccessRightParametersNotNeeded();
    this.prices = (data.prices || []).map((price) => new FarePrice(price));
    this.activeComparisonOperatorVariant =
      data.activeComparisonOperatorVariant || GpaComparisonOperatorVariant.E;
  }
  /**
    TODO: Remove this code once the inconsistent naming of the "accessRightParameterAssignmentRefs" field has been fixed in the PoP API.
   */
  removeAccessRightParametersNotNeeded() {
    delete this.extraFields.parameterAssignments;
    delete this.extraFields.parameterAssignmentRefs;
  }

  toPayload(fareFrame: FareFrame) {
    // TODO: Remove this code once the inconsistent naming of the "accessRightParameterAssignmentRefs" field has been fixed in the PoP API.
    let payload = super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((price) => price.toPayload(fareFrame))
    });

    switch (this.nameOfClass) {
      case 'AmountOfPriceUnitProduct':
        return payload.withChanges({
          accessRightParameterAssignments: []
        });
      case 'SaleDiscountRight':
        delete payload.accessRightParameterAssignmentRefs;

        return payload.withChanges({
          accessRightParameterAssignments:
            this.accessRightParameterAssignments.map((gpa) =>
              gpa.toPayload(fareFrame)
            )
        });
      case 'SalesPackage':
      case 'CappingRule':
      case 'SupplementProduct':
      case 'CappedDiscountRight':
      case 'PreassignedFareProduct':
        return payload;
      case 'FareStructureElement':
        delete payload.accessRightParameterAssignmentRefs;

        return payload.withChanges({
          parameterAssignmentRefs: this.accessRightParameterAssignmentRefs
        });
      default:
        payload = payload.withChanges({
          accessRightParameterAssignments:
            this.accessRightParameterAssignmentRefs
        });
        delete payload.accessRightParameterAssignmentRefs;

        return payload;
    }
  }

  updateRefs(bucket: BucketStateType) {
    return this.withChanges({
      accessRightParameterAssignmentRefs:
        this.accessRightParameterAssignmentRefs.map((ref) =>
          getThingInBucketByRef(bucket, ref)
            ? getThingInBucketByRef(bucket, ref)?.instance.toRef()
            : ref
        )
    });
  }
}

export default Dorito;

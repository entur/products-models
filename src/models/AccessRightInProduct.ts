import { AccessRightInProductData } from '../types/interfaces';
import { BucketStateType } from '../types/types';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import Reference from './Reference';

const NAME_OF_CLASS = 'AccessRightInProduct';

class AccessRightInProduct extends BaseModel {
  preassignedFareProductRef: Reference;
  validableElementRef: Reference;
  accessNumber?: number;
  accessNumberIsLimited?: boolean;
  minimumAccess?: number;
  maximumAccess?: number;
  constructor(data: Partial<AccessRightInProductData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      preassignedFareProductRef,
      validableElementRef,
      accessNumber,
      accessNumberIsLimited,
      minimumAccess,
      maximumAccess
    } = data;

    this.preassignedFareProductRef = new Reference({
      nameOfClass: preassignedFareProductRef?.nameOfClass,
      ref: preassignedFareProductRef?.ref,
      version: preassignedFareProductRef?.version
    });
    this.validableElementRef = new Reference({
      nameOfClass: validableElementRef?.nameOfClass,
      ref: validableElementRef?.ref,
      version: validableElementRef?.version
    });
    this.accessNumber = accessNumber;
    this.accessNumberIsLimited = accessNumberIsLimited;
    this.minimumAccess = minimumAccess;
    this.maximumAccess = maximumAccess;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  updateRefs(bucket: BucketStateType): this {
    return super.updateRefs(bucket).withChanges({
      preassignedFareProductRef: this.updateRef(
        'preassignedFareProductRef',
        bucket
      ),
      validableElementRef: this.updateRef('validableElementRef', bucket)
    });
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame);

    payload.name = [];
    payload.description = [];

    return payload;
  }
}

export default AccessRightInProduct;

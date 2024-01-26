import { CellData } from '../types/interfaces';
import { BucketStateType } from '../types/types';
import { getThingInBucketByRef } from '../utils/get-thing-in-bucket-by-ref';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';

const NAME_OF_CLASS = 'Cell';

class Cell extends BaseModel {
  priceableObjectRefs: Reference[];
  farePrice: FarePrice;
  constructor(data: Partial<CellData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.priceableObjectRefs = data.priceableObjectRefs || [];
    this.farePrice = new FarePrice({
      ...data?.farePrice,
      codeSpace: this.codeSpace,
      version: this.version
    });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      farePrice: this.farePrice.withVersion(version)
    });
  }

  updateRefs(bucket: BucketStateType) {
    return super.updateRefs(bucket).withChanges({
      priceableObjectRefs: this.priceableObjectRefs.map((ref: Reference) =>
        getThingInBucketByRef(bucket, ref)
          ? getThingInBucketByRef(bucket, ref)?.instance.toRef()
          : ref
      )
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      farePrice: this.farePrice.toPayload(fareFrame)
    });
  }
}

export default Cell;

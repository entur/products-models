import { SalesPackageElementData } from '../types/interfaces';
import { BucketStateType } from '../types/types';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'SalesPackageElement';

class SalesPackageElement extends BaseModel {
  fareProductRef?: Reference;
  salesPackageRef?: Reference;
  fareTableRefs: Array<Reference>;

  constructor(data: Partial<SalesPackageElementData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    if (data.fareProductRef) {
      this.fareProductRef = new Reference(data.fareProductRef);
    }

    if (data.salesPackageRef) {
      this.salesPackageRef = new Reference(data.salesPackageRef);
    }

    this.fareTableRefs = (data.fareTableRefs || []).map(
      (ref) => new Reference(ref)
    );
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  updateRefs(bucket: BucketStateType) {
    return this.withChanges({
      fareProductRef: this.updateRef('fareProductRef', bucket)
    });
  }
}

export default SalesPackageElement;

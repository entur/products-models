import { TypeOfFareProductData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import Reference from './Reference';

const NAME_OF_CLASS = 'TypeOfFareProduct';

class TypeOfFareProduct extends BaseModel {
  fareFrameRef: Reference;

  constructor(data: Partial<TypeOfFareProductData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.fareFrameRef = new Reference({
      nameOfClass: data.fareFrameRef?.nameOfClass,
      ref: data.fareFrameRef?.ref,
      version: data.fareFrameRef?.version
    });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      fareFrameRef: this.fareFrameRef
    });
  }
}

export default TypeOfFareProduct;

import { RoundingMethod } from '../types/enums';
import { RoundingData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'Rounding';

class Rounding extends BaseModel {
  roundingMethod: RoundingMethod;
  roundingModulus?: number;
  constructor(data: Partial<RoundingData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];

    const { roundingMethod, roundingModulus } = data;

    this.roundingMethod = roundingMethod || RoundingMethod.NONE;
    this.roundingModulus = roundingModulus;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default Rounding;

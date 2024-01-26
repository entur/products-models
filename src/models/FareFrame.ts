import { BaseModelData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'FareFrame';

class FareFrame extends BaseModel {
  constructor(data: Partial<BaseModelData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    if (!data.id) {
      throw new Error('FareFrame-instances must be created with an id');
    }
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default FareFrame;

import { BaseModelData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'EntitlementProduct';

class EntitlementProduct extends BaseModel {
  constructor(data: Partial<BaseModelData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default EntitlementProduct;

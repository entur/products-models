import { VatGroupRegister } from '../types/enums';
import { PreassignedFareProductData } from '../types/interfaces';

import FareProduct from './FareProduct';

const NAME_OF_CLASS = 'PreassignedFareProduct';

class PreassignedFareProduct extends FareProduct {
  vatGroupRegister?: VatGroupRegister;
  constructor(data: Partial<PreassignedFareProductData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.vatGroupRegister = data.vatGroup || data.vatGroupRegister;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default PreassignedFareProduct;

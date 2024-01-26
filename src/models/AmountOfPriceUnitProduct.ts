import { AmountOfPriceUnitProductType } from '../types/enums';
import { AmountOfPriceUnitProductData } from '../types/interfaces';

import FareProduct from './FareProduct';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'AmountOfPriceUnitProduct';

class AmountOfPriceUnitProduct extends FareProduct {
  amount: number;
  validityConditions: ValidityCondition[];
  productType: AmountOfPriceUnitProductType;

  constructor(data: Partial<AmountOfPriceUnitProductData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.amount = data.amount || 1;
    this.validityConditions = data.validityConditions || [];
    this.productType = data.productType || AmountOfPriceUnitProductType.OTHER;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default AmountOfPriceUnitProduct;

import { ValidationRequirementEnum } from '../types/enums';
import { SaleDiscountRightData } from '../types/interfaces';

import FareFrame from './FareFrame';
import FareProduct from './FareProduct';
import Reference from './Reference';
import TypeOfFareProduct from './TypeOfFareProduct';
import ValidBetween from './ValidBetween';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'SaleDiscountRight';

class SaleDiscountRight extends FareProduct {
  validationRequirements: ValidationRequirementEnum[];
  validityConditions: ValidityCondition[];
  typeOfFareProduct?: TypeOfFareProduct;
  typeOfFareProductRef?: Reference;

  constructor(data: Partial<SaleDiscountRightData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.validationRequirements = data.validationRequirements || [];
    this.validityConditions = (data.validityConditions || []).map(
      (vc) => new ValidBetween(vc)
    );
    this.typeOfFareProduct = data.typeOfFareProduct
      ? new TypeOfFareProduct(data.typeOfFareProduct)
      : undefined;
    this.typeOfFareProductRef = data.typeOfFareProductRef;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame).withChanges({
      typeOfFareProductRef: this.typeOfFareProduct
        ? new Reference({
          nameOfClass: TypeOfFareProduct.getNameOfClass(),
          ref: this.typeOfFareProduct.id,
          version: this.typeOfFareProduct.version
        })
        : undefined
    });

    delete payload.typeOfFareProduct;

    return payload;
  }
}

// eslint-disable-next-line import/no-unused-modules
export default SaleDiscountRight;

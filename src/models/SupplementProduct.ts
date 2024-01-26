import { SupplementProductType, VatGroupRegister } from '../types/enums';
import { SupplementProductData } from '../types/interfaces';

import FareFrame from './FareFrame';
import FareProduct from './FareProduct';
import Reference from './Reference';
import TypeOfFareProduct from './TypeOfFareProduct';

const NAME_OF_CLASS = 'SupplementProduct';

class SupplementProduct extends FareProduct {
  supplementProductType?: SupplementProductType;
  vatGroupRegister?: VatGroupRegister;
  typeOfFareProduct?: TypeOfFareProduct;
  typeOfFareProductRef?: Reference;

  constructor(data: Partial<SupplementProductData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.supplementProductType = data.supplementProductType;
    this.vatGroupRegister = data.vatGroup || data.vatGroupRegister;
    this.typeOfFareProduct = data.typeOfFareProduct;
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

export default SupplementProduct;

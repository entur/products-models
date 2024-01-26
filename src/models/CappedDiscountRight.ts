import { ValiditionRequirementEnum, VatGroupRegister } from '../types/enums';
import { CappedDiscountRightData } from '../types/interfaces';

import CappingRule from './CappingRule';
import FareFrame from './FareFrame';
import FareProduct from './FareProduct';

const NAME_OF_CLASS = 'CappedDiscountRight';

class CappedDiscountRight extends FareProduct {
  validationRequirements?: ValiditionRequirementEnum;
  cappingRules: CappingRule[];
  vatGroupRegister: VatGroupRegister;

  constructor(data: Partial<CappedDiscountRightData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.validationRequirements = data.validationRequirements;
    this.cappingRules = (data.cappingRules || []).map(
      (ct) => new CappingRule(ct)
    );
    this.vatGroupRegister =
      data.vatGroupRegister || VatGroupRegister.TRANSPORT_AND_TICKETS_VAT;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      cappingRules: this.cappingRules.map((cappingRule) =>
        cappingRule.toPayload(fareFrame)
      )
    });
  }
}

export default CappedDiscountRight;

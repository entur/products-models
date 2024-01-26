import { EntitlementType } from '../types/enums';
import { EntitlementGivenData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';

const NAME_OF_CLASS = 'EntitlementGiven';

class EntitlementGiven extends BaseModel {
  entitlementType: EntitlementType;
  serviceAccessRightRef?: Reference;
  minimumQualificationPeriod?: string;
  prices: Array<FarePrice>;
  constructor(data: Partial<EntitlementGivenData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.entitlementType =
      data.entitlementType || EntitlementType.PURCHASE_AT_DISCOUNT;
    this.serviceAccessRightRef = data.serviceAccessRightRef;
    this.prices = (data.prices || []).map((p) => new FarePrice(p));
    this.name = data.name || [];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((price) => price.toPayload(fareFrame))
    });
  }
}

export default EntitlementGiven;

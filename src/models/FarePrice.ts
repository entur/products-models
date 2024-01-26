import { PriceType, VatRegisterGroup } from '../types/enums';
import { FarePriceData } from '../types/interfaces';
import { filterObject } from '../utils/filter-object';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import LimitingRule from './LimitingRule';
import Reference from './Reference';
import Rounding from './Rounding';

const NAME_OF_CLASS = 'FarePrice';

class FarePrice extends BaseModel {
  amount?: number;
  currency?: string;
  isAllowed?: boolean;
  discountPercentageUsed?: number;
  rounding?: Rounding;
  priceType?: PriceType;
  vatRegisterGroup?: VatRegisterGroup;
  limitingRule?: LimitingRule;
  roundingRef?: Reference;
  canBeCumulative?: boolean;

  constructor(data: Partial<FarePriceData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = [];
    this.amount = data.amount;
    this.currency = data.currency || 'NOK';
    this.isAllowed = data.isAllowed;
    this.discountPercentageUsed = data.discountPercentageUsed;
    this.rounding = data.rounding
      ? new Rounding({ ...data.rounding, codeSpace: this.codeSpace })
      : undefined;
    this.priceType = data.priceType;
    this.vatRegisterGroup = data.vatRegisterGroup;
    this.limitingRule = data.limitingRule
      ? new LimitingRule(data.limitingRule)
      : undefined;
    this.roundingRef = data.roundingRef;
    this.canBeCumulative = data.canBeCumulative;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      limitingRule: this.limitingRule?.withVersion(version)
    });
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame).withChanges({
      rounding: this.rounding ? this.rounding.toPayload(fareFrame) : undefined,
      discountPercentageUsed: this.discountPercentageUsed
        ? this.discountPercentageUsed // POP API requires discountPercentageUsed to be a number and not a string to be saved. Only discountPercentageUsed, not amount.
        : null,
      limitingRule: this.limitingRule?.toPayload(fareFrame)
    });
    const dropNulls = ['amount', 'discountPercentageUsed'];

    return filterObject(
      payload,
      (f) => !dropNulls.includes(f) || payload[f] !== null
    );
  }
}

export default FarePrice;

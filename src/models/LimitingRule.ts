import { LimitingRuleData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'LimitingRule';

class LimitingRule extends BaseModel {
  canBeCumulative?: boolean;
  discountAsPercentage?: number;
  discountAsValue?: number;
  maximumPriceAsPercentage?: string;
  maximumPrice?: string;
  minimumPrice?: string;
  minimumLimitPrice?: string;

  constructor(data: Partial<LimitingRuleData>) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.canBeCumulative = data.canBeCumulative;
    this.discountAsPercentage = data.discountAsPercentage;
    this.discountAsValue = data.discountAsValue;
    this.maximumPriceAsPercentage = data.maximumPriceAsPercentage;
    this.maximumPrice = data.maximumPrice;
    this.minimumPrice = data.minimumPrice;
    this.minimumLimitPrice = data.minimumLimitPrice;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default LimitingRule;

import { ConditionSummaryData } from '../types/interfaces';

const NAME_OF_CLASS = 'ConditionSummary';

class ConditionSummary {
  id: string;
  isRefundable?: boolean;
  isExchangeable?: boolean;
  constructor(data: ConditionSummaryData) {
    this.id = data.id;
    this.isRefundable = data.isRefundable;
    this.isExchangeable = data.isExchangeable;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default ConditionSummary;

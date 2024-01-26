import { ValidityConditionData } from '../types/interfaces';

import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'ValidBetween';

class ValidBetween extends ValidityCondition {
  fromDate: string;
  toDate?: string;
  constructor(data: Partial<ValidityConditionData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const { fromDate, toDate } = data;

    this.name = data.name || [];
    this.fromDate = fromDate || new Date().toISOString();
    this.toDate = toDate;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default ValidBetween;

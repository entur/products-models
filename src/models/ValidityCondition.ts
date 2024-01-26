import { ValidityConditionData } from '../types/interfaces';

import BaseModel from './BaseModel';

abstract class ValidityCondition extends BaseModel {
  fromDate?: string;
  toDate?: string;
  constructor(data: Partial<ValidityConditionData> = {}) {
    super({ ...data });

    const { fromDate, toDate } = data;

    this.fromDate = fromDate;
    this.toDate = toDate;
  }
}

export default ValidityCondition;

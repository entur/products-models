import { TemporalValidityParameterData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'TemporalValidityParameter';

class TemporalValidityParameter extends BaseModel {
  dayType?: Reference;
  validityCondition?: ValidityCondition;
  validityConditionRef?: Reference;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  operatingDayId?: any;

  constructor(data: Partial<TemporalValidityParameterData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const { dayType, validityCondition, operatingDayId, validityConditionRef } =
      data;

    this.dayType = dayType;
    this.validityCondition = validityCondition;
    this.validityConditionRef = validityConditionRef;
    this.operatingDayId = operatingDayId;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default TemporalValidityParameter;

import { FrequencyOfUseType } from '../types/enums';
import { FrequencyOfUseData } from '../types/interfaces';
import { getFrequencyRange } from '../utils/get-frequency-range';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';

const NAME_OF_CLASS = 'FrequencyOfUse';

class FrequencyOfUse extends BaseModel {
  frequencyOfUseType: FrequencyOfUseType;
  maximalFrequency?: number;
  minimalFrequency?: number;

  constructor(data: Partial<FrequencyOfUseData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.frequencyOfUseType =
      data.frequencyOfUseType || FrequencyOfUseType.UNLIMITED;
    this.maximalFrequency = data.maximalFrequency;
    this.minimalFrequency = data.minimalFrequency;

    /* work around for clearing name for new instance until we have decided what to do with default value in BaseModel*/
    if (!data.name) {
      this.name = [];
    }

    if (!data.description) {
      this.description = [];
    }
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    const frequencyRange = getFrequencyRange(
      this.frequencyOfUseType,
      this.maximalFrequency
    );

    return super.toPayload(fareFrame).withChanges({
      ...frequencyRange
    });
  }
}

export default FrequencyOfUse;

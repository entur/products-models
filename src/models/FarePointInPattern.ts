import { FarePointInPatternData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import Reference from './Reference';

const NAME_OF_CLASS = 'FarePointInPattern';

class FarePointInPattern extends BaseModel {
  pointRef: string;
  journeyPatternRef: Reference;
  orderOfElement: number;
  constructor(data: Partial<FarePointInPatternData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.pointRef = data.pointRef || '';
    this.orderOfElement = data.orderOfElement || 0;
    this.journeyPatternRef = data.journeyPatternRef || new Reference({});
  }
  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame);

    payload.name = [];
    payload.description = [];

    return payload;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default FarePointInPattern;

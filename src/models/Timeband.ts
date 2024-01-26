import { TimebandData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'Timeband';

class Timeband extends BaseModel {
  startTime: string;
  endTime: string;
  dayOffset: number;

  constructor(data: Partial<TimebandData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.startTime = data.startTime || '00:00:00';
    this.endTime = data.endTime || '23:59:59';
    this.dayOffset = data.dayOffset || 0;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default Timeband;

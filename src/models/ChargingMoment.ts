import { ChargingMomentData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'ChargingMoment';

class ChargingMoment extends BaseModel {
  fareFrameRef: Reference;
  derivedFromVersionRef?: string;
  compatibleWithVersionRef?: string;

  constructor(data: Partial<ChargingMomentData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const { name, fareFrameRef } = data;

    this.fareFrameRef = new Reference({
      nameOfClass: fareFrameRef?.nameOfClass,
      ref: fareFrameRef?.ref,
      version: fareFrameRef?.version
    });

    this.name =
      name && name.length > 0
        ? name
        : [
          { lang: 'nob', value: 'Forhåndsbetalt' },
          { lang: 'eng', value: 'Prepaid' }
        ];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default ChargingMoment;

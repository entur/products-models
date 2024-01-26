import { FareSectionData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'FareSection';

class FareSection extends BaseModel {
  journeyPatternRef?: Reference;
  fromFarePointRef?: Reference;
  toFarePointRef?: Reference;
  constructor(data: Partial<FareSectionData> = {}) {
    super(Object.assign(data, { nameOfClass: NAME_OF_CLASS }));
    this.journeyPatternRef = data.journeyPatternRef;
    this.fromFarePointRef = data.fromFarePointRef;
    this.toFarePointRef = data.toFarePointRef;
    this.name = data.name || [];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default FareSection;

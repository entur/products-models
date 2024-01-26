import { FareStructureElementInSequenceData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'FareStructureElementInSequence';

class FareStructureElementInSequence extends BaseModel {
  fareStructureElementId: string;
  orderOfElement: number;
  isFirstInSequence: boolean;
  isLastInSequence: boolean;
  fareStructureElementRef?: Reference;

  constructor(data: Partial<FareStructureElementInSequenceData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.fareStructureElementId = data.fareStructureElementId || '';
    this.orderOfElement = data.orderOfElement || 1;
    this.isFirstInSequence = data.isFirstInSequence || false;
    this.isLastInSequence = data.isLastInSequence || false;
    this.fareStructureElementRef = data.fareStructureElementRef;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default FareStructureElementInSequence;

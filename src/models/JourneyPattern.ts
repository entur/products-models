import { JourneyPatternData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FarePointInPattern from './FarePointInPattern';

const NAME_OF_CLASS = 'JourneyPattern';

class JourneyPattern extends BaseModel {
  farePointsInPattern?: FarePointInPattern[];

  constructor(data: Partial<JourneyPatternData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.farePointsInPattern = (data.farePointsInPattern || []).map(
      (fpip) => new FarePointInPattern(fpip)
    );
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  swapFarePointsInPattern(indexA: number, indexB: number) {
    if (!this.farePointsInPattern || !this.farePointsInPattern.length)
      return this;

    const temp = this.farePointsInPattern[indexA];

    this.farePointsInPattern[indexA] = this.farePointsInPattern[indexB];
    this.farePointsInPattern[indexB] = temp;

    return this.withChanges({ farePointsInPattern: this.farePointsInPattern });
  }
  removeFarePointsInPattern(id: string) {
    if (!this.farePointsInPattern || !this.farePointsInPattern.length)
      return this;

    const farePointInPatternToBeRemoved = this.farePointsInPattern.find(
      (farePointInPattern) => farePointInPattern.id === id
    );

    if (!farePointInPatternToBeRemoved) return this;

    const removedorderOfElement = farePointInPatternToBeRemoved.orderOfElement;

    // Remove the farePointInPattern from the array
    this.farePointsInPattern = this.farePointsInPattern
      .filter((farePointInPattern) => farePointInPattern.id !== id)
      // Set the orderOfElement of the remaining farePointInPatterns to be consecutive
      .map((farePointInPattern) => {
        if (farePointInPattern.orderOfElement > removedorderOfElement) {
          farePointInPattern.orderOfElement--;
        }

        return farePointInPattern;
      });

    return this;
  }
}

export default JourneyPattern;

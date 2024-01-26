import { ValidableElementData } from '../types/interfaces';

import Dorito from './Dorito';
import FareFrame from './FareFrame';
import FareStructureElement from './FareStructureElement';
import FareStructureElementInSequence from './FareStructureElementInSequence';
import Reference from './Reference';
import Version from './Version';

const NAME_OF_CLASS = 'ValidableElement';

class ValidableElement extends Dorito {
  fareStructureElementsRef: Reference[];
  fareStructureElementsInSequence: Array<FareStructureElementInSequence>;

  constructor(data: Partial<ValidableElementData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.fareStructureElementsRef = (data.fareStructureElementsRef || []).map(
      (ref) => new Reference(ref)
    );

    this.fareStructureElementsInSequence = (
      data.fareStructureElementsInSequence || []
    ).map((fse) => new FareStructureElementInSequence(fse));
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  addFareStructureElement(fse: FareStructureElement) {
    const fareStructureElementsRef = this.fareStructureElementsRef.concat(
      fse.toRef()
    );

    return this.withChanges({ fareStructureElementsRef });
  }

  removeFareStructureElementById(fseId: string) {
    const fareStructureElementsRef = this.fareStructureElementsRef.filter(
      (ref) => ref.ref !== fseId
    );

    return this.withChanges({ fareStructureElementsRef });
  }

  withVersion(newVersion: Version | string): this {
    return super.withVersion(newVersion).withChanges({
      fareStructureElementsInSequence: this.fareStructureElementsInSequence.map(
        (fseis) => fseis.withVersion(newVersion)
      )
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      fareStructureElementsInSequence: this.fareStructureElementsInSequence.map(
        (fseis) => fseis.toPayload(fareFrame)
      )
    });
  }
}

export default ValidableElement;

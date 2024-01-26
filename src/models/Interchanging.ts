import { TransportMode } from '../types/enums';
import { InterchangingData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'Interchanging';

class Interchanging extends BaseModel {
  maximumNumberOfChanges?: number;
  maximumTimeToMakeATransfer?: string;
  typeOfUsageParameterRef?: Reference;
  fromMode?: TransportMode;
  toMode?: TransportMode;

  constructor(data: Partial<InterchangingData> = {}) {
    super(Object.assign(data, { nameOfClass: NAME_OF_CLASS }));

    this.name = data.name || [];
    this.maximumNumberOfChanges = data.maximumNumberOfChanges;
    this.maximumTimeToMakeATransfer = data.maximumTimeToMakeATransfer;
    this.typeOfUsageParameterRef = data.typeOfUsageParameterRef
      ? new Reference(data.typeOfUsageParameterRef)
      : undefined;
    this.fromMode = data.fromMode;
    this.toMode = data.toMode;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default Interchanging;

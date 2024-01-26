import { TripType } from '../types/enums';
import { RoundTripData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'RoundTrip';

class RoundTrip extends BaseModel {
  tripType?: TripType;
  doubleSingleFare: boolean;
  shortTrip: boolean;
  isRequired: boolean;
  typeOfUsageParameter?: string;

  constructor(data: Partial<RoundTripData> = {}) {
    super(Object.assign(data, { nameOfClass: NAME_OF_CLASS }));
    this.name = data.name || [];
    this.tripType = data.tripType;
    this.doubleSingleFare = data.doubleSingleFare || false;
    this.shortTrip = data.shortTrip || false;
    this.isRequired = data.isRequired || false;
    this.typeOfUsageParameter = data.typeOfUsageParameter;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default RoundTrip;

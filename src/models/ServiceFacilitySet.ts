import { ServiceFacilitySetData } from '../types/interfaces';

import Accommodation from './Accommodation';
import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import Version from './Version';

const NAME_OF_CLASS = 'ServiceFacilitySet';

class ServiceFacilitySet extends BaseModel {
  accommodation?: Accommodation;

  constructor(data: Partial<ServiceFacilitySetData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.accommodation = data.accommodation
      ? new Accommodation(data.accommodation)
      : undefined;
  }

  withVersion(newVersion: Version | string): this {
    return super.withVersion(newVersion).withChanges({
      accomodation: this.accommodation?.withVersion(newVersion)
    });
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame);

    if (this.accommodation) {
      payload.accommodation = this.accommodation.toPayload(fareFrame);
    }

    return payload;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default ServiceFacilitySet;

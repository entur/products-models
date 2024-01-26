import { AccommodationFacility, NuisanceFacility } from '../types/enums';
import { AccomodationData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';

const NAME_OF_CLASS = 'Accommodation';

class Accommodation extends BaseModel {
  accommodationFacility?: AccommodationFacility;
  nuisanceFacilities?: NuisanceFacility[];

  constructor(data: Partial<AccomodationData>) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.accommodationFacility = data.accommodationFacility;
    this.nuisanceFacilities = data.nuisanceFacilities;
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame);

    delete payload.name;
    delete payload.description;

    return payload;
  }
}

export default Accommodation;

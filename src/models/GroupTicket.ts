import {
  GroupCheckInEnum,
  GroupDiscountBasis,
  PerBasis,
  TicketingType
} from '../types/enums';
import { GroupTicketData } from '../types/interfaces';

import BaseModel from './BaseModel';
import CompanionProfile from './CompanionProfile';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';

const NAME_OF_CLASS = 'GroupTicket';

class GroupTicket extends BaseModel {
  companionProfiles: CompanionProfile[];
  groupDiscountBasis?: GroupDiscountBasis;
  minimumNumberOfPersons?: number;
  maximumNumberOfPersons?: number;
  prices: Array<FarePrice>;
  pricingBasis?: PerBasis;
  ticketing?: TicketingType;
  jointCheckIn?: GroupCheckInEnum;

  constructor(data: Partial<GroupTicketData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];
    this.description = data.description || [];
    this.companionProfiles =
      data.companionProfiles?.map(
        (companionProfile) => new CompanionProfile(companionProfile)
      ) ?? [];

    this.groupDiscountBasis = data.groupDiscountBasis;
    this.minimumNumberOfPersons = data.minimumNumberOfPersons;
    this.maximumNumberOfPersons = data.maximumNumberOfPersons;
    this.prices = (data.prices || []).map((p) => new FarePrice(p));
    this.pricingBasis = data.pricingBasis;
    this.ticketing = data.ticketing;
    this.jointCheckIn = data.jointCheckIn;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame).withChanges({
      companionProfiles: this.companionProfiles.map((cp) =>
        cp.toPayload(fareFrame)
      ),
      prices: this.prices.map((price) => price.toPayload(fareFrame))
    });

    // GroupDiscountBasis.OTHER is a dummy value that does not exist on the model
    if (payload.groupDiscountBasis === GroupDiscountBasis.OTHER) {
      delete payload.groupDiscountBasis;
    }

    return payload;
  }
}

export default GroupTicket;

import { DiscountBasis, PriceType, TicketingType } from '../types/enums';
import { CompanionProfileData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';

const NAME_OF_CLASS = 'CompanionProfile';

class CompanionProfile extends BaseModel {
  parentRef?: Reference;
  userProfileId?: string;
  minimumNumberOfPersons?: number;
  maximumNumberOfPersons?: number;
  discountBasis?: DiscountBasis;
  prices: FarePrice[];
  priceType: PriceType;
  fareFrameRef: Reference;
  fareTableRefs: Array<Reference>;
  generalGroupOfEntities?: Reference;
  ticketing?: TicketingType;

  constructor(data: Partial<CompanionProfileData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.parentRef = data.parentRef;
    this.userProfileId = data.userProfileId;
    this.minimumNumberOfPersons = data.minimumNumberOfPersons;
    this.maximumNumberOfPersons = data.maximumNumberOfPersons;
    this.discountBasis = data.discountBasis;
    this.prices =
      data.prices?.map((price: FarePrice) => new FarePrice(price)) || [];
    this.priceType = data.prices?.[0]?.discountPercentageUsed
      ? PriceType.PERCENT
      : PriceType.FIXED;
    this.fareFrameRef = new Reference({
      nameOfClass: data.fareFrameRef?.nameOfClass,
      ref: data.fareFrameRef?.ref,
      version: data.fareFrameRef?.version
    });
    this.fareTableRefs = (data.fareTableRefs || []).map(
      (ref) => new Reference(ref)
    );
    this.generalGroupOfEntities = data.generalGroupOfEntities
      ? new Reference(data.generalGroupOfEntities)
      : undefined;
    this.ticketing = data.ticketing;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      prices: this.prices.map((p: FarePrice) => p.withVersion(version))
    });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame);

    if (this.discountBasis === DiscountBasis.FREE) {
      payload.prices = [];
    } else if (payload.prices[0]) {
      payload.prices = [payload.prices[0].toPayload(fareFrame)];
    }

    delete payload.priceType;

    return payload;
  }
}

export default CompanionProfile;

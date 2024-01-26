import {
  ExchangeableTo,
  ExchangingAllowed,
  FareClass,
  RefundBasis,
  ResellWhen
} from '../types/enums';
import { ExchangingData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';

const NAME_OF_CLASS = 'Exchanging';

class Exchanging extends BaseModel {
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  allowed?: ExchangingAllowed;
  prices: FarePrice[];
  unusedTicketsOnly?: boolean;
  hasFee?: boolean;
  exchangeableFromDuration?: string;
  exchangeableUntilDuration?: string;
  resellWhen?: ResellWhen;
  canChangeClass?: boolean;
  onlyAtCertainDistributionPoints?: boolean;
  exchangeableFromAnyTime?: boolean;
  exchangeableUntilAnyTime?: boolean;
  refundBasis?: RefundBasis;
  numberOfExchangesAllowed?: number;
  toFareClass?: FareClass;
  exchangeableTo?: ExchangeableTo;
  specifiedProducts: Array<string>;

  constructor(data: Partial<ExchangingData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      allowed,
      canChangeClass,
      exchangeableTo,
      exchangeableFromDuration,
      exchangeableUntilDuration,
      exchangeableFromAnyTime,
      exchangeableUntilAnyTime,
      fareTableRefs,
      fareFrameRef,
      hasFee,
      name,
      numberOfExchangesAllowed,
      onlyAtCertainDistributionPoints,
      prices,
      resellWhen,
      refundBasis,
      specifiedProducts,
      toFareClass,
      unusedTicketsOnly
    } = data;

    this.name = name || [];
    this.fareTableRefs = (fareTableRefs || []).map(
      (ref: Reference) => new Reference(ref)
    );
    this.fareFrameRef =
      fareFrameRef ||
      new Reference({
        nameOfClass: data.fareFrameRef?.nameOfClass,
        ref: data.fareFrameRef?.ref,
        version: data.fareFrameRef?.version
      });
    this.prices = (prices || []).map((p) => new FarePrice(p));
    this.allowed = allowed;
    this.unusedTicketsOnly = unusedTicketsOnly;
    this.hasFee = hasFee;
    this.exchangeableFromDuration = exchangeableFromDuration;
    this.exchangeableUntilDuration = exchangeableUntilDuration;
    this.resellWhen = resellWhen;
    this.canChangeClass = canChangeClass;
    this.onlyAtCertainDistributionPoints = onlyAtCertainDistributionPoints;
    this.exchangeableFromAnyTime = exchangeableFromAnyTime;
    this.exchangeableUntilAnyTime = exchangeableUntilAnyTime;
    this.refundBasis = refundBasis;
    this.numberOfExchangesAllowed = numberOfExchangesAllowed;
    this.toFareClass = toFareClass;
    this.exchangeableTo = exchangeableTo;
    this.specifiedProducts = specifiedProducts || [];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  removeSpecifiedProductById(fareProductId: string) {
    const specifiedProducts = this.specifiedProducts?.filter(
      (id) => id !== fareProductId
    );

    return this.withChanges({ specifiedProducts });
  }

  addSpecifiedProducts(fareProducts: Array<string>) {
    const specifiedProducts = [...this.specifiedProducts, ...fareProducts];

    return this.withChanges({ specifiedProducts });
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      prices: this.prices.map((p: FarePrice) => p.withVersion(version))
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((price) => price.toPayload(fareFrame))
    });
  }
}

export default Exchanging;

import {
  RefundBasis,
  RefundType,
  ResellType,
  ResellWhen
} from '../types/enums';
import { RefundingData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import LimitingRule from './LimitingRule';
import Reference from './Reference';

const NAME_OF_CLASS = 'Refunding';

class Refunding extends BaseModel {
  refundType?: RefundType;
  resellWhen?: ResellWhen;
  prices: FarePrice[];
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  limitingRuleRef?: Reference;
  limitingRule?: LimitingRule;
  canChangeClass?: boolean;
  allowed: ResellType;
  unusedTicketsOnly?: boolean;
  hasFee?: boolean;
  exchangeableFromDuration?: string;
  exchangeableUntilDuration?: string;
  onlyAtCertainDistributionPoints?: boolean;
  exchangeableFromAnyTime?: boolean;
  exchangeableUntilAnyTime?: boolean;
  refundBasis?: RefundBasis;

  constructor(data: Partial<RefundingData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      refundType,
      prices,
      limitingRuleRef,
      limitingRule,
      canChangeClass,
      fareTableRefs,
      fareFrameRef,
      allowed,
      unusedTicketsOnly,
      onlyAtCertainDistributionPoints,
      resellWhen,
      exchangeableFromAnyTime,
      exchangeableFromDuration,
      exchangeableUntilAnyTime,
      exchangeableUntilDuration,
      hasFee,
      refundBasis
    } = data;

    this.name = data.name || [];
    this.refundType = refundType;
    this.resellWhen = resellWhen;
    this.prices = (prices || []).map((p) => new FarePrice(p));
    this.limitingRuleRef = limitingRuleRef;
    this.limitingRule = limitingRule;
    this.canChangeClass = canChangeClass;
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
    this.allowed = allowed || ResellType.NONE;
    this.unusedTicketsOnly = unusedTicketsOnly;
    this.onlyAtCertainDistributionPoints = onlyAtCertainDistributionPoints;

    this.exchangeableFromAnyTime = exchangeableFromAnyTime;
    this.exchangeableFromDuration = exchangeableFromDuration;
    this.exchangeableUntilAnyTime = exchangeableUntilAnyTime;
    this.exchangeableUntilDuration = exchangeableUntilDuration;
    this.hasFee = hasFee;
    this.refundBasis = refundBasis;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((price) => price.toPayload(fareFrame))
    });
  }
}

export default Refunding;

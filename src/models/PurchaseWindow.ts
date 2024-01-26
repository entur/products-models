import { PurchaseWhen } from '../types/enums';
import { PurchaseWindowData } from '../types/interfaces';

import BaseModel from './BaseModel';
import LimitingRule from './LimitingRule';
import Reference from './Reference';

const NAME_OF_CLASS = 'PurchaseWindow';

class PurchaseWindow extends BaseModel {
  fareFrameRef: Reference;
  derivedFromVersionRef?: string;
  compatibleWithVersionRef?: string;
  limitingRule?: LimitingRule;
  purchaseWhen?: PurchaseWhen;
  latestTime?: string;
  minimumPeriodBeforeDeparture?: string;
  maxmumPeriodBeforeDeparture?: string;
  constructor(data: Partial<PurchaseWindowData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      name,
      fareFrameRef,
      limitingRule,
      purchaseWhen,
      latestTime,
      minimumPeriodBeforeDeparture,
      maxmumPeriodBeforeDeparture
    } = data;

    this.name = name || [];
    this.fareFrameRef = new Reference({
      nameOfClass: fareFrameRef?.nameOfClass,
      ref: fareFrameRef?.ref,
      version: fareFrameRef?.version
    });
    this.limitingRule = limitingRule;
    this.purchaseWhen = purchaseWhen;
    this.latestTime = latestTime;
    this.minimumPeriodBeforeDeparture = minimumPeriodBeforeDeparture;
    // Typo from PoP API in maximum
    this.maxmumPeriodBeforeDeparture = maxmumPeriodBeforeDeparture;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default PurchaseWindow;

import { ReplacingAllowed, ResellWhen } from '../types/enums';
import { ReplacingData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Version from './Version';

const NAME_OF_CLASS = 'Replacing';

class Replacing extends BaseModel {
  allowed?: ReplacingAllowed;
  resellWhen?: ResellWhen;
  hasFee?: boolean;
  prices: Array<FarePrice>;
  exchangeableFromAnyTime?: boolean;
  exchangeableFromDuration?: string;
  exchangeableUntilAnyTime?: boolean;
  exchangeableUntilDuration?: string;

  constructor(data: Partial<ReplacingData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];
    this.description = data.description || [];
    this.allowed = data.allowed;
    this.resellWhen = data.resellWhen;
    this.hasFee = data.hasFee;
    this.prices = (data.prices || []).map((price) => new FarePrice(price));
    this.exchangeableFromAnyTime = data?.exchangeableFromAnyTime;
    this.exchangeableFromDuration = data?.exchangeableFromDuration;
    this.exchangeableUntilAnyTime = data?.exchangeableUntilAnyTime;
    this.exchangeableUntilDuration = data?.exchangeableUntilDuration;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withVersion(newVersion: Version | string): this {
    const versionId =
      newVersion instanceof Version ? newVersion.id : newVersion;

    return super.withVersion(newVersion).withChanges({
      prices: this.prices.map((p) => p.withVersion(versionId))
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((price) => price.toPayload(fareFrame))
    });
  }
}

export default Replacing;

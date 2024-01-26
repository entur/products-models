import { PenaltyAction } from '../types/enums';
import { PenaltyPolicyData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';
import Version from './Version';

const NAME_OF_CLASS = 'PenaltyPolicy';

class PenaltyPolicy extends BaseModel {
  fareTableRefs: Array<Reference>;
  prices: Array<FarePrice>;
  penaltyPolicyType?: string;
  sameStationReentryPolicyType?: string;
  minimumTimeBeforeReentry?: string;
  penaltyAction?: PenaltyAction;
  paymentMethod?: string;
  constructor(data: Partial<PenaltyPolicyData> = {}) {
    const {
      fareTableRefs,
      prices,
      penaltyPolicyType,
      sameStationReentryPolicyType,
      minimumTimeBeforeReentry,
      penaltyAction,
      paymentMethod
    } = data;

    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];
    this.description = data.description || [];
    this.fareTableRefs = (fareTableRefs || []).map(
      (ref: Reference) => new Reference(ref)
    );
    this.prices = (prices || []).map((p) => new FarePrice(p));
    this.penaltyPolicyType = penaltyPolicyType;
    this.sameStationReentryPolicyType = sameStationReentryPolicyType;
    this.minimumTimeBeforeReentry = minimumTimeBeforeReentry;
    this.penaltyAction = penaltyAction;
    this.paymentMethod = paymentMethod;
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

export default PenaltyPolicy;

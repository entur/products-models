import { UvpForNumberOfZonesData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import UsageValidityPeriod from './UsageValidityPeriod';

const NAME_OF_CLASS = 'UvpForNumberOfZones';

class UvpForNumberOfZones extends BaseModel {
  authorityId: string;
  usageValidityPeriodId: string;
  numberOfZones: number;
  usageValidityPeriod?: UsageValidityPeriod;

  constructor(data: Partial<UvpForNumberOfZonesData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.authorityId = data.authorityId ?? '';

    if (data.usageValidityPeriodId) {
      this.usageValidityPeriodId = data.usageValidityPeriodId;
    } else if (data.usageValidityPeriod) {
      this.usageValidityPeriodId = data.usageValidityPeriod.id;
    } else {
      this.usageValidityPeriodId = '';
    }

    this.numberOfZones = data.numberOfZones ?? 0;

    this.usageValidityPeriod = data.usageValidityPeriod;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges(
      this.usageValidityPeriod
        ? {
          usageValidityPeriod: this.usageValidityPeriod.withVersion(version)
        }
        : {}
    );
  }

  toPayload(fareFrame: FareFrame) {
    const payload = super.toPayload(fareFrame);

    delete payload.usageValidityPeriod;

    return payload;
  }
}

export default UvpForNumberOfZones;

import { DistanceMatrixElementData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'DistanceMatrixElement';

class DistanceMatrixElement extends BaseModel {
  startScheduledStopPointId?: string;
  endScheduledStopPointId?: string;
  validityConditions: ValidityCondition[];
  prices: FarePrice[];
  tariffRef?: Reference;
  groupRef?: Reference;
  startTariffZoneId?: string;
  endTariffZoneId?: string;

  constructor(data: Partial<DistanceMatrixElementData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.startScheduledStopPointId = data.startScheduledStopPointId;
    this.endScheduledStopPointId = data.endScheduledStopPointId;
    this.validityConditions = data.validityConditions || [];
    this.prices = (data.prices || []).map(
      (farePrice: FarePrice) => new FarePrice(farePrice)
    );
    this.groupRef = data.groupRef;
    this.tariffRef = data.tariffRef;
    this.startTariffZoneId = data.startTariffZoneId;
    this.endTariffZoneId = data.endTariffZoneId;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      prices: this.prices.map((p: FarePrice) => p.withVersion(version))
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((p: FarePrice) => p.toPayload(fareFrame))
    });
  }
}

export default DistanceMatrixElement;

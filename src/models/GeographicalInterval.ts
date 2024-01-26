import { IntervalType } from '../types/enums';
import { GeographicalIntervalData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';

const NAME_OF_CLASS = 'GeographicalInterval';

class GeographicalInterval extends BaseModel {
  startGeographicalValue?: number;
  endGeographicalValue?: number;
  intervalType: IntervalType;
  prices: FarePrice[];
  numberOfUnits?: number;
  fareTableRefs = [];

  constructor(data: Partial<GeographicalIntervalData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.startGeographicalValue = data?.startGeographicalValue;
    this.endGeographicalValue = data?.endGeographicalValue;
    this.intervalType = data?.intervalType || IntervalType.DISTANCE;
    this.prices = (data?.prices || []).map(
      (farePrice) => new FarePrice(farePrice)
    );
    this.numberOfUnits = data?.numberOfUnits;
    this.fareTableRefs = [];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      prices: this.prices.map((p) => p.withVersion(version))
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((p) => p.toPayload(fareFrame))
    });
  }
}

export default GeographicalInterval;

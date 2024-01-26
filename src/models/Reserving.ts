import {
  FeeBasis,
  ReservationChargeType,
  ReservingRequirements
} from '../types/enums';
import { ReservingData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';

const NAME_OF_CLASS = 'Reserving';

class Reserving extends BaseModel {
  fareFrameRef: Reference;
  fareTableRefs: Reference[];
  prices: FarePrice[];
  typeOfUsageParameter?: string;
  reservingRequirements?: ReservingRequirements;
  minimumNumberToReserve?: number;
  maximumNumberToReserve?: number;
  reservationChargeType?: ReservationChargeType;
  feeBasis?: FeeBasis;
  mustReserveWholeCompartment?: boolean;

  constructor(data: Partial<ReservingData> = {}) {
    const {
      fareTableRefs,
      fareFrameRef,
      prices,
      typeOfUsageParameter,
      reservingRequirements,
      minimumNumberToReserve,
      maximumNumberToReserve,
      reservationChargeType,
      feeBasis,
      mustReserveWholeCompartment
    } = data;

    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
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
    this.typeOfUsageParameter = typeOfUsageParameter;
    this.reservingRequirements = reservingRequirements;
    this.minimumNumberToReserve = minimumNumberToReserve;
    this.maximumNumberToReserve = maximumNumberToReserve;
    this.reservationChargeType = reservationChargeType;
    this.feeBasis = feeBasis;
    this.mustReserveWholeCompartment = mustReserveWholeCompartment;
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

export default Reserving;

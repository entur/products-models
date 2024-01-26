import {
  BaggageType,
  BaggageUseType,
  LuggageAllowanceType,
  LuggageChargingBasis
} from '../types/enums';
import { LuggageAllowanceData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'LuggageAllowance';

class LuggageAllowance extends BaseModel {
  baggageType?: BaggageType;
  baggageUseType?: BaggageUseType;
  luggageAllowanceType?: LuggageAllowanceType;
  luggageChargingBasis?: LuggageChargingBasis;

  constructor(data: Partial<LuggageAllowanceData>) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.baggageType = data.baggageType;
    this.baggageUseType = data.baggageUseType;
    this.luggageAllowanceType = data.luggageAllowanceType;
    this.luggageChargingBasis = data.luggageChargingBasis;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default LuggageAllowance;

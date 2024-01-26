import { EntitlementRequiredData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FarePrice from './FarePrice';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'EntitlementRequired';

class EntitlementRequired extends BaseModel {
  validityConditions?: ValidityCondition[];
  prices?: FarePrice[];
  typeOfUsageParameter?: string;
  serviceAccessRightNetexId?: string;
  minimumQualificationPeriod?: string;

  constructor(data: Partial<EntitlementRequiredData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.validityConditions = data.validityConditions;
    this.prices = data.prices;
    this.typeOfUsageParameter = data.typeOfUsageParameter;
    this.serviceAccessRightNetexId = data.serviceAccessRightNetexId;
    this.minimumQualificationPeriod = data.minimumQualificationPeriod;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default EntitlementRequired;

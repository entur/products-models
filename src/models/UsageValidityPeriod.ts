import {
  ActivationMeans,
  UsageEnd,
  UsageStartConstraintType,
  UsageTrigger,
  UsageValidityType
} from '../types/enums';
import { UsageValidityPeriodData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';
import SteppedDuration from './SteppedDuration';

const NAME_OF_CLASS = 'UsageValidityPeriod';

class UsageValidityPeriod extends BaseModel {
  standardDuration?: string;
  usageValidityTypes: UsageValidityType[];
  usageTrigger?: UsageTrigger;
  usageEnds: UsageEnd[];
  fareTableRefs: Reference[];
  steppedDuration?: SteppedDuration;
  usageStartConstraintType?: UsageStartConstraintType;
  activationMeans: ActivationMeans[];

  constructor(data: Partial<UsageValidityPeriodData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      standardDuration,
      usageValidityTypes,
      usageTrigger,
      usageEnds,
      fareTableRefs,
      steppedDuration,
      usageStartConstraintType,
      activationMeans
    } = data;

    this.name = data.name || [];
    this.standardDuration = standardDuration;
    this.usageValidityTypes = usageValidityTypes || [];
    this.usageTrigger = usageTrigger;
    this.usageEnds = usageEnds || [];
    this.fareTableRefs = fareTableRefs || [];
    this.steppedDuration = steppedDuration;
    this.usageStartConstraintType = usageStartConstraintType;
    this.activationMeans = activationMeans || [ActivationMeans.OTHER];
  }
  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default UsageValidityPeriod;

import { AvailabilityConditionData } from '../types/interfaces';

import Reference from './Reference';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'AvailabilityCondition';


class AvailabilityCondition extends ValidityCondition {
  dayTypeRefs?: Reference[];
  isAvailable: boolean;
  fromDate: string;
  toDate: string;
  timebandRefs?: Array<Reference>;
  constructor(data: Partial<AvailabilityConditionData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      name,
      description,
      fromDate,
      toDate,
      dayTypeRefs,
      isAvailable,
      timebandRefs
    } = data;

    this.name = name || [];
    this.description = description || [];
    this.fromDate = fromDate || new Date().toISOString();
    this.toDate = toDate || new Date().toISOString();
    this.dayTypeRefs = dayTypeRefs || [];
    this.isAvailable = isAvailable || true;
    this.timebandRefs = timebandRefs;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default AvailabilityCondition;

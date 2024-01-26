import { DayTypeData } from '../types/interfaces';

import BaseModel from './BaseModel';
import PropertyOfDay from './PropertyOfDay';
import Reference from './Reference';

const NAME_OF_CLASS = 'DayType';

class DayType extends BaseModel {
  earliestTime?: string;
  availabilityCondition?: Reference;
  dayLength?: string;
  durationBeforePropertiesOfDay?: string;
  durationAfterPropertiesOfDay?: string;
  properties?: Array<PropertyOfDay>;
  timebandRefs?: Array<Reference>;
  constructor(data: Partial<DayTypeData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    const {
      name,
      description,
      earliestTime,
      availabilityCondition,
      dayLength,
      durationBeforePropertiesOfDay,
      durationAfterPropertiesOfDay,
      properties,
      timebandRefs
    } = data;

    this.name = name || [];
    this.description = description || [];
    this.earliestTime = earliestTime;
    this.availabilityCondition = availabilityCondition;
    this.dayLength = dayLength;
    this.durationBeforePropertiesOfDay = durationBeforePropertiesOfDay;
    this.durationAfterPropertiesOfDay = durationAfterPropertiesOfDay;
    this.properties = properties;
    this.timebandRefs = timebandRefs;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default DayType;

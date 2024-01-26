import { DaysOfWeekEnum, HolidayTypeEnum } from '../types/enums';
import { PropertyOfDayData } from '../types/interfaces';

class PropertyOfDay {
  name: string;
  description?: string;
  daysOfWeek?: DaysOfWeekEnum[];
  monthOfYear?: number;
  dayOfYear?: string;
  holidayTypes?: HolidayTypeEnum[];

  constructor(data: PropertyOfDayData) {
    if (!data.name) {
      throw new Error('Cannot create an PropertyOfDay without name.');
    }

    this.name = data.name;
    this.description = data.description;
    this.daysOfWeek = data.daysOfWeek;
    this.monthOfYear = data.monthOfYear;
    this.dayOfYear = data.dayOfYear;
    this.holidayTypes = data.holidayTypes;
  }
}

export default PropertyOfDay;

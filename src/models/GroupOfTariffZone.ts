import { GroupOfTariffZoneData } from '../types/interfaces';

const NAME_OF_CLASS = 'GroupOfTariffZone';

class GroupOfTariffZone {
  readonly id: string;
  readonly name: {
    readonly value: string;
    readonly lang: string;
  };

  constructor(data: GroupOfTariffZoneData) {
    this.id = data.id;
    this.name = data.name;
  }

  getName() {
    return this.name.value;
  }
  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default GroupOfTariffZone;

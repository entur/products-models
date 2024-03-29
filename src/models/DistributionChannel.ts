import { DistributionChannelData } from '../types/interfaces';

const NAME_OF_CLASS = 'DistributionChannel';

class DistributionChannel {
  readonly id: string;
  readonly name: Record<string, string>;
  readonly ownerOrgId: number;

  constructor(data: DistributionChannelData) {
    this.id = data.id;
    this.name = data.name;
    this.ownerOrgId = data.ownerOrgId;
  }

  getName(locale: string) {
    if (locale === 'en') {
      return this.name.eng;
    } else if (locale === 'nb') {
      return this.name.nob ?? this.name.nno ?? '';
    } else {
      return '';
    }
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default DistributionChannel;

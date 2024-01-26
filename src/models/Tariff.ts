import { TariffBasis } from '../types/enums';
import { TariffData } from '../types/interfaces';
import { BucketStateType } from '../types/types';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'Tariff';

class Tariff extends BaseModel {
  tariffBasis: TariffBasis;
  validBetweenRef?: Reference;

  constructor(data: Partial<TariffData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.tariffBasis = data.tariffBasis || TariffBasis.DISTANCE;
    this.validBetweenRef = data.validBetweenRef;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  updateRefs(bucket: BucketStateType) {
    return super.updateRefs(bucket).withChanges({
      validBetweenRef: this.updateRef('validBetweenRef', bucket)
    });
  }
}

export default Tariff;

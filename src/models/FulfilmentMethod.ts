import { FulfilmentMethodType } from '../types/enums';
import { FulfilmentMethodData } from '../types/interfaces';

import Dorito from './Dorito';

const NAME_OF_CLASS = 'FulfilmentMethod';

class FulfilmentMethod extends Dorito {
  fulfilmentMethodType?: FulfilmentMethodType;

  constructor(data: Partial<FulfilmentMethodData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.fulfilmentMethodType = data.fulfilmentMethodType;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default FulfilmentMethod;

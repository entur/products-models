import { CappingRuleData } from '../types/interfaces';

import Dorito from './Dorito';
import Reference from './Reference';

const NAME_OF_CLASS = 'CappingRule';

class CappingRule extends Dorito {
  preassignedFareProductRef?: Reference;
  validableElementRef?: Reference;

  constructor(data: Partial<CappingRuleData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.description = data.description || [];

    this.preassignedFareProductRef = data.preassignedFareProductRef;
    this.validableElementRef = data.validableElementRef;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default CappingRule;

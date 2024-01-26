import { ParameterUsageData } from '../types/interfaces';

import Reference from './Reference';

class ParameterUsages {
  elementRefs: Reference[];
  constructor(data: ParameterUsageData = {}) {
    this.elementRefs = data.elementRefs || [];
  }
}

export default ParameterUsages;

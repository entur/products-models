import { SecurityPolicyData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'SecurityPolicy';

class SecurityPolicy extends BaseModel {
  minimumAccountSecurityLevel: number;

  constructor(data: Partial<SecurityPolicyData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.minimumAccountSecurityLevel = data.minimumAccountSecurityLevel || -120;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default SecurityPolicy;

import { RevertingData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';

const NAME_OF_CLASS = 'Reverting';

class Reverting extends BaseModel {
  allowedAfterControl: boolean;
  typeOfResponsibilityRoleRef?: Reference;
  minimumTimeAfterUse?: string;
  maximumTimeAfterUse?: string;

  constructor(data: Partial<RevertingData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];
    this.allowedAfterControl = data.allowedAfterControl || true;
    this.typeOfResponsibilityRoleRef = data.typeOfResponsibilityRoleRef;
    this.minimumTimeAfterUse = data.minimumTimeAfterUse;
    this.maximumTimeAfterUse = data.maximumTimeAfterUse;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default Reverting;

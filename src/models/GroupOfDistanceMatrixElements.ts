import { GroupOfDistanceMatrixElementsData } from '../types/interfaces';

import BaseModel from './BaseModel';
import DistanceMatrixElement from './DistanceMatrixElement';
import ValidityCondition from './ValidityCondition';

const NAME_OF_CLASS = 'GroupOfDistanceMatrixElements';

class GroupOfDistanceMatrixElements extends BaseModel {
  validityConditions: ValidityCondition[];
  members: DistanceMatrixElement[];
  fareFrameId = 0; // Workaround

  constructor(data: Partial<GroupOfDistanceMatrixElementsData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.validityConditions = data.validityConditions || [];
    this.members = data.members || [];
  }

  static getNameOfClass = () => NAME_OF_CLASS;
}

export default GroupOfDistanceMatrixElements;

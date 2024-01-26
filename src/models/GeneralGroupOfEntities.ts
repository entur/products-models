import { GeneralGroupOfEntitiesData } from '../types/interfaces';

import BaseModel from './BaseModel';
import Reference from './Reference';
import UserProfile from './UserProfile';

const NAME_OF_CLASS = 'GeneralGroupOfEntities';

class GeneralGroupOfEntities extends BaseModel {
  nameOfMemberClass: string;
  members: Array<Reference>;
  constructor(data: Partial<GeneralGroupOfEntitiesData>) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];
    this.description = data.description || [];
    this.nameOfMemberClass =
      data.nameOfMemberClass || UserProfile.getNameOfClass();
    this.members = data.members || [];
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default GeneralGroupOfEntities;

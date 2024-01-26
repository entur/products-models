import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'TypeOfUsageParameter';

class TypeOfUsageParameter extends BaseModel {
  constructor(data = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default TypeOfUsageParameter;

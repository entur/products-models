
import { State } from '../types/enums';
import { ThingData } from '../types/interfaces';

import BaseModel from './BaseModel';

export default class Thing<T extends BaseModel> {
  instance: T;
  state: State;
  constructor(data: ThingData<T>) {
    this.instance = data.instance;
    this.state = data.state || State.NEW;
  }

  hasChanged() {
    return this.state !== State.EXISTING;
  }
}

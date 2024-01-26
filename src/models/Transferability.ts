import { TransferabilityData } from '../types/interfaces';

import BaseModel from './BaseModel';

const NAME_OF_CLASS = 'Transferability';

class Transferability extends BaseModel {
  canTransfer?: boolean;
  maximumNumberOfNamedUsers?: number;
  hasTransferFee?: boolean;

  constructor(data: Partial<TransferabilityData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];
    this.canTransfer = data.canTransfer;
    this.maximumNumberOfNamedUsers = data.maximumNumberOfNamedUsers;
    this.hasTransferFee = data.hasTransferFee;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default Transferability;

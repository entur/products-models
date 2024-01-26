import { MetaDataData } from '../types/interfaces';
import { cloneObject } from '../utils/clone-objects';

import FareFrame from './FareFrame';

const NAME_OF_CLASS = 'MetaData';

class MetaData {
  id: string;
  version: string;
  created: string;
  responsible: string;
  externalReferenceName?: string;
  externalReferenceUrl?: string;
  note?: string;
  nameOfClass: string;

  constructor(data: Partial<MetaDataData>) {
    if (!(data.id && data.version && data.created && data.responsible)) {
      throw new Error(
        'Cannot create an metaData without id, version, created and responsible.'
      );
    }

    this.id = data.id;
    this.version = data.version;
    this.created = data.created;
    this.responsible = data.responsible;
    this.nameOfClass = data.nameOfClass || NAME_OF_CLASS;
    this.externalReferenceName = data.externalReferenceName;
    this.externalReferenceUrl = data.externalReferenceUrl;
    this.note = data.note;
  }

  withChanges(args: object): this {
    return cloneObject(this, args);
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  toPayload(fareFrame: FareFrame) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload: any = this.withChanges({
      fareFrameRef: fareFrame.toRef()
    });

    return payload;
  }
}

export default MetaData;

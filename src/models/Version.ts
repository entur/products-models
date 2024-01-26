import { v4 as uuid } from 'uuid';

import { Modification, VersionStatus, VersionType } from '../types/enums';
import { VersionData } from '../types/interfaces';
import { TextInLanguage } from '../types/types';
import { cloneObject } from '../utils/clone-objects';

import FareFrame from './FareFrame';

const NAME_OF_CLASS = 'Version';
const getStringFromDateValue = (arg: number | string | Date) => {
  if (typeof arg === 'string') return arg;
  else if (typeof arg === 'number') return new Date(arg).toISOString();

  return arg.toISOString();
};

class Version {
  id: string;
  nameOfClass: string;
  created: string;
  changed: string;
  description: Array<TextInLanguage>;
  modification: Modification;
  status?: VersionStatus;
  startDate?: string;
  endDate?: string;
  versionType: VersionType;

  constructor(data: Partial<VersionData>) {
    if (!(data.id || (data.codeSpace && NAME_OF_CLASS))) {
      throw new Error(
        'Cannot create an version without either id or codeSpace and nameOfClass.'
      );
    }

    this.id = data.id || Version.generateNewVersionId(data.codeSpace!);
    this.nameOfClass = NAME_OF_CLASS;
    this.created = data.created || '';
    this.description = data.description || [];
    this.changed = data.changed || '';
    this.modification = data.modification || Modification.NEW;
    this.status = data.status;
    this.startDate = data.startDate
      ? getStringFromDateValue(data.startDate)
      : undefined;
    this.endDate = data.endDate
      ? getStringFromDateValue(data.endDate)
      : undefined;
    this.versionType = data.versionType || VersionType.BASELINE;
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  withChanges(args: object): this {
    return cloneObject(this, args);
  }

  publish() {
    return cloneObject(this, { status: VersionStatus.VERSIONED });
  }

  static newVersion(id?: string) {
    return new Version({ id });
  }

  static generateNewVersionId(codeSpace?: string, prefix?: string) {
    if (!(codeSpace && NAME_OF_CLASS)) {
      throw new Error(
        'Cannot create an version id without codeSpace and nameOfClass.'
      );
    }

    return `${codeSpace}:${NAME_OF_CLASS}:${
      prefix ? prefix + '-' : ''
    }${uuid()}`;
  }

  static getPossibleNewStatusesForStatus(status: VersionStatus) {
    switch (status) {
      case VersionStatus.DRAFT:
        return [VersionStatus.PROPOSED];
      case VersionStatus.PROPOSED:
        return [VersionStatus.DRAFT, VersionStatus.VERSIONED];
      case VersionStatus.VERSIONED:
        return [VersionStatus.DRAFT, VersionStatus.DEPRECATED];
      case VersionStatus.DEPRECATED:
        return [VersionStatus.DRAFT];
      default:
        return [];
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toPayload(fareFrame: FareFrame): any {
    if (!fareFrame) {
      throw new Error(
        `Missing fare frame for version with id ${this.id} in toPayload(fareFrame).`
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const payload: any = this.withChanges({
      fareFrameRef: fareFrame.toRef()
    });

    delete payload.created;
    delete payload.changed;
    delete payload.modification;

    return payload;
  }
}

export default Version;

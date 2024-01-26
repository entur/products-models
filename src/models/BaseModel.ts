import { Modification, VersionStatus } from '../types/enums';
import { BaseModelData } from '../types/interfaces';
import { BucketStateType, TextInLanguage } from '../types/types';
import { cloneObject } from '../utils/clone-objects';
import { codeSpaceFromNetexId } from '../utils/code-space-from-netex-id';
import { createUuid } from '../utils/generate-id';
import { getThingInBucketByRef } from '../utils/get-thing-in-bucket-by-ref';

import FareFrame from './FareFrame';
import Reference from './Reference';
import Version from './Version';

abstract class BaseModel {
  id: string;
  version?: string;
  codeSpace: string;
  nameOfClass: string;
  created: string;
  changed: string;
  modification: Modification;
  status: VersionStatus;
  name: Array<TextInLanguage>;
  description: Array<TextInLanguage>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraFields: any;

  protected constructor(data: Partial<BaseModelData> = {}) {
    if (!data.version || !(data.id || (data.codeSpace && data.nameOfClass))) {
      throw new Error(
        'Cannot create an instance without either id, version or codeSpace and nameOfClass.'
      );
    }

    // Assign all unknown properties. By doing this we ensure that any unknown properties that may have been added
    // to a PoP entity (maybe without us knowing) are assigned and passed back to the API when PUT-ing. The absence
    // of such properties in the PUT request could possibly unintentionally delete them from the object.
    this.extraFields = data;

    this.codeSpace = data.id
      ? codeSpaceFromNetexId(data.id)
      : data.codeSpace
        ? data.codeSpace
        : codeSpaceFromNetexId(data.version);

    this.nameOfClass = data.nameOfClass || '';

    this.id =
      data.id || `${data.codeSpace}:${data.nameOfClass}:${createUuid()}`;
    this.created = data.created || '';
    this.changed = data.changed || '';
    this.version = data.version;
    this.modification = data.modification || Modification.NEW;
    this.status = data.status || VersionStatus.DRAFT;
    this.name = data.name || [
      { lang: 'nob', value: 'Navn' },
      { lang: 'eng', value: 'Name' }
    ];
    this.description = data.description || [
      { lang: 'nob', value: 'Beskrivelse' },
      { lang: 'eng', value: 'Description' }
    ];
  }

  withChanges(args: object): this {
    return cloneObject(this, args);
  }

  withChangesToProperty(property: keyof this, args: object): this {
    const prop = this[property];

    if (prop instanceof BaseModel) {
      return cloneObject(this, {
        [property]: prop.withChanges(args)
      });
    }

    throw Error('Property must be a descendant of BaseModel');
  }

  withTranslation(fieldName: keyof this, lang: string, value: string): this {
    const field = this[fieldName];

    if (!Array.isArray(field)) {
      throw Error(`'${String(fieldName)}' is not a translation field.`);
    } else {
      const index = field.findIndex((t) => t.lang === lang);

      let newTranslation;

      if (index > -1) {
        if (value.length > 0) {
          newTranslation = [
            ...field.slice(0, index),
            { lang, value },
            ...field.slice(index + 1)
          ];
        } else {
          newTranslation = field.filter((e, i) => i !== index);
        }
      } else {
        newTranslation = field.concat({ lang, value });
      }

      return this.withChanges({
        [fieldName]: newTranslation
      });
    }
  }

  withTranslations(
    field: keyof this,
    values: {
      [key: string]: string;
    }
  ): this {
    if (!Array.isArray(this[field])) {
      throw Error(`'${String(field)}' is not a translation field.`);
    }

    return this.withChanges({
      [field]: Object.entries(values).map(([lang, value]) => ({
        lang,
        value
      }))
    });
  }

  withVersion(newVersion: Version | string): this {
    return this.withChanges({
      version: newVersion instanceof Version ? newVersion.id : newVersion
    });
  }

  withNewId(): this {
    return this.withChanges({
      id: `${this.codeSpace}:${this.nameOfClass}:${createUuid()}`
    });
  }

  withNewIdAndVersion(version: string): this {
    return this.withChanges({
      id: `${this.codeSpace}:${this.nameOfClass}:${createUuid()}`,
      version
    });
  }

  toRef() {
    return new Reference({
      nameOfClass: this.nameOfClass,
      ref: this.id,
      version: this.version
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateRefs(bucket: BucketStateType) {
    return this;
  }

  updateRef(refProp: keyof this, bucket: BucketStateType) {
    const referenceProp = this[refProp];

    if (
      referenceProp instanceof Reference &&
      getThingInBucketByRef(bucket, referenceProp)
    ) {
      return getThingInBucketByRef(bucket, referenceProp)?.instance.toRef();
    }

    return referenceProp;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toPayload(fareFrame: FareFrame): any {
    if (!fareFrame) {
      throw new Error(
        `Missing fare frame for instance with id ${this.id} in toPayload(fareFrame).`
      );
    }

    const payload = Object.assign(
      this.withChanges({}),
      this.extraFields,
      this.withChanges({
        fareFrameRef: fareFrame.toRef(),
        version: this.version,
        name: this.name.filter((textInLanguage) => textInLanguage.value !== ''),
        description: this.description.filter(
          (textInLanguage) => textInLanguage.value !== ''
        )
      })
    );

    if (payload.nameOfClass !== 'ScopingValidityParameter') {
      delete payload.created;
      delete payload.changed;
      delete payload.modification;
      delete payload.status;
    }

    delete payload.codeSpace;
    delete payload.extraFields;

    return payload;
  }
}

export default BaseModel;

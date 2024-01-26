import { FareQuotaFactorData } from '../types/interfaces';

import BaseModel from './BaseModel';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';
import ValidityCondition from './ValidityCondition';
import Version from './Version';

const NAME_OF_CLASS = 'FareQuotaFactor';

class FareQuotaFactor extends BaseModel {
  fareStructureElementRef: Reference;
  fareFrameRef: Reference;
  prices: FarePrice[];
  validityConditions: ValidityCondition[];

  constructor(data: Partial<FareQuotaFactorData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.fareStructureElementRef = new Reference({
      nameOfClass: data.fareStructureElementRef?.nameOfClass,
      ref: data.fareStructureElementRef?.ref,
      version: data.fareStructureElementRef?.version
    });
    this.fareFrameRef = new Reference({
      nameOfClass: data.fareFrameRef?.nameOfClass,
      ref: data.fareFrameRef?.ref,
      version: data.fareFrameRef?.version
    });
    this.prices = (data.prices || []).map(
      (farePrice: FarePrice) => new FarePrice(farePrice)
    );
    this.name = data.name || [];
    this.description = data.description || [];
    this.validityConditions = data.validityConditions || [];
  }

  withVersion(newVersion: Version | string): this {
    const versionId =
      newVersion instanceof Version ? newVersion.id : newVersion;

    return this.withChanges({
      version: versionId,
      fareStructureElementRef: new Reference({
        ...this.fareStructureElementRef,
        version: versionId
      })
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((price) => price.toPayload(fareFrame)),
      validityCondition: this.validityConditions.map((vc) =>
        vc.toPayload(fareFrame)
      )
    });
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }
}

export default FareQuotaFactor;

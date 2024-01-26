import { FactorTypes, TariffBasisFSE } from '../types/enums';
import { FareStructureElementData } from '../types/interfaces';
import { BucketStateType } from '../types/types';
import { getThingInBucketByRef } from '../utils/get-thing-in-bucket-by-ref';
import { notEmpty } from '../utils/not-empty';

import Dorito from './Dorito';
import FareFrame from './FareFrame';
import Reference from './Reference';
import Version from './Version';

const NAME_OF_CLASS = 'FareStructureElement';

class FareStructureElement extends Dorito {
  qualityStructureFactorRefs: Reference[];
  geographicalStructureFactorRefs: Reference[];
  tariffBasis?: TariffBasisFSE;
  fareTableRefs: Array<Reference>;

  constructor(data: Partial<FareStructureElementData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });
    this.name = data.name || [];
    this.qualityStructureFactorRefs = data.qualityStructureFactorRefs || [];
    this.geographicalStructureFactorRefs =
      data.geographicalStructureFactorRefs || [];
    this.tariffBasis = data.tariffBasis;
    this.fareTableRefs = (data.fareTableRefs || []).map(
      (ft) => new Reference(ft)
    );
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  getFactorType() {
    if (notEmpty(this.geographicalStructureFactorRefs)) {
      return 'gsf';
    } else if (notEmpty(this.qualityStructureFactorRefs)) {
      return FactorTypes.FARE_QUOTA;
    } else {
      return '';
    }
  }

  getFareTableRefsWithEqualDatesAndStatus(versions: {
    [versionKey: string]: Version;
  }) {
    return this.fareTableRefs.filter((ftRef: Reference) =>
      this.instanceHasSameDatesAndStatus(versions, ftRef, this.version)
    );
  }

  getStructureFactorRefsWithEqualDatesAndStatus(versions: {
    [versionKey: string]: Version;
  }) {
    return this.geographicalStructureFactorRefs.filter((gsfRef: Reference) =>
      this.instanceHasSameDatesAndStatus(versions, gsfRef, this.version)
    );
  }

  fareTableHasSomeVersionsWithUnequalDatesAndStatus(versions: {
    [versionKey: string]: Version;
  }) {
    return this.fareTableRefs.some(
      (ftRef: Reference) =>
        !this.instanceHasSameDatesAndStatus(versions, ftRef, this.version)
    );
  }

  gsfHasSomeVersionWithEqualDatesAndStatus(versions: {
    [versionKey: string]: Version;
  }) {
    return this.geographicalStructureFactorRefs.some((ftRef: Reference) =>
      this.instanceHasSameDatesAndStatus(versions, ftRef, this.version)
    );
  }

  instanceHasSameDatesAndStatus(
    versions: { [p: string]: Version },
    reference: Reference,
    fpVersion?: string
  ) {
    const version = versions[reference.version];
    const myVersion = fpVersion ? versions[fpVersion] : undefined;

    return (
      !version ||
      !version.status ||
      (version.startDate === myVersion?.startDate &&
        version.endDate === myVersion?.endDate &&
        version.status === myVersion?.status)
    );
  }

  updateRefs(bucket: BucketStateType) {
    return super.updateRefs(bucket).withChanges({
      qualityStructureFactorRefs: this.qualityStructureFactorRefs.map(
        (ref: Reference) =>
          getThingInBucketByRef(bucket, ref)
            ? getThingInBucketByRef(bucket, ref)?.instance.toRef()
            : ref
      ),
      fareTableRefs: this.fareTableRefs.map((ref) =>
        getThingInBucketByRef(bucket, ref)
          ? getThingInBucketByRef(bucket, ref)?.instance.toRef()
          : ref
      )
    });
  }

  toPayload(fareFrame: FareFrame) {
    let payload = super.toPayload(fareFrame);

    if (this.geographicalStructureFactorRefs.length > 0) {
      payload = payload.withChanges({
        geographicalStructureFactorId:
          this.geographicalStructureFactorRefs[0]?.ref
      });
      delete payload.geographicalStructureFactorRefs;
    }

    return payload;
  }
}

export default FareStructureElement;

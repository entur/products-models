import { GeographicalStructureFactorData } from '../types/interfaces';

import BaseModel from './BaseModel';
import DistanceMatrixElement from './DistanceMatrixElement';
import FareFrame from './FareFrame';
import GeographicalInterval from './GeographicalInterval';
import Reference from './Reference';

const NAME_OF_CLASS = 'GeographicalStructureFactor';

class GeographicalStructureFactor extends BaseModel {
  geographicalIntervals: Array<GeographicalInterval>;
  distanceMatrixElements: Array<DistanceMatrixElement>;

  constructor(data: Partial<GeographicalStructureFactorData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.name = data.name || [];

    this.geographicalIntervals =
      data.geographicalIntervals?.map((gi) => new GeographicalInterval(gi)) ??
      [];
    this.distanceMatrixElements =
      data.distanceMatrixElements?.map(
        (ptp) => new DistanceMatrixElement(ptp)
      ) ?? [];
  }

  static getNameOfClass = () => NAME_OF_CLASS;

  addNewGI(gi: GeographicalInterval): GeographicalStructureFactor {
    const geographicalIntervals = this.geographicalIntervals.concat(gi);

    return this.withChanges({ geographicalIntervals });
  }

  getDmeGroupRef() {
    return this.distanceMatrixElements.length > 0
      ? this.distanceMatrixElements[0].groupRef
      : new Reference({});
  }

  updateGI(updatedGI: GeographicalInterval): GeographicalStructureFactor {
    return this.withChanges({
      geographicalIntervals: this.geographicalIntervals.map((gi) =>
        gi.id === updatedGI.id ? updatedGI : gi
      )
    });
  }

  addNewDme(dme: DistanceMatrixElement) {
    const distanceMatrixElements = this.distanceMatrixElements.concat(dme);

    return this.withChanges({ distanceMatrixElements });
  }

  removeDme(dme: DistanceMatrixElement) {
    const distanceMatrixElements = this.distanceMatrixElements.filter(
      (ptp) => ptp.id !== dme.id && ptp.version === dme.version
    );

    return this.withChanges({ distanceMatrixElements });
  }

  updateDme(updatedDme: DistanceMatrixElement) {
    return this.withChanges({
      distanceMatrixElements: this.distanceMatrixElements.map((ptp) =>
        ptp.id === updatedDme.id ? updatedDme : ptp
      )
    });
  }

  removeGI(gi: GeographicalInterval): GeographicalStructureFactor {
    const geographicalIntervals = this.geographicalIntervals.filter(
      (existingGi) =>
        existingGi.id !== gi.id && existingGi.version === gi.version
    );

    return this.withChanges({ geographicalIntervals });
  }

  withVersion(version: string): this {
    return super.withVersion(version).withChanges({
      geographicalIntervals: this.geographicalIntervals.map((gi) =>
        gi.withVersion(version)
      ),
      distanceMatrixElements: this.distanceMatrixElements.map((dme) =>
        dme.withVersion(version)
      )
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      geographicalIntervals: this.geographicalIntervals.map((gi) =>
        gi.toPayload(fareFrame)
      ),
      distanceMatrixElements: this.distanceMatrixElements.map((dme) =>
        dme.toPayload(fareFrame)
      )
    });
  }
}

export default GeographicalStructureFactor;

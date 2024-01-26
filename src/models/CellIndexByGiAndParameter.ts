import { PassengerTypes } from '../types/enums';
import { indexKey } from '../utils/index-key';

import Cell from './Cell';
import GeographicalInterval from './GeographicalInterval';
import Reference from './Reference';

class CellIndexByGiAndParameter {
  cellIndex: Map<string, Cell>;
  profileRefs: Set<string>;
  constructor(cells: Cell[]) {
    const findGi = (cell: Cell) =>
      cell.priceableObjectRefs.find(
        (ref: Reference) =>
          ref.nameOfClass === GeographicalInterval.getNameOfClass()
      );
    const findProfile = (cell: Cell) =>
      cell.priceableObjectRefs.find((ref: Reference) =>
        (Object.values(PassengerTypes) as Array<string>).includes(
          ref.nameOfClass
        )
      );

    this.cellIndex = new Map();
    this.profileRefs = new Set();

    cells.forEach((cell) => {
      const profileRef = findProfile(cell)?.ref;

      this.cellIndex.set(indexKey(profileRef, findGi(cell)?.ref), cell);

      if (profileRef != null) {
        this.profileRefs.add(profileRef);
      }
    });
  }

  getByProfileAndGi(profileId: string, giId: string): Cell {
    return this.cellIndex.get(indexKey(profileId, giId)) as Cell;
  }
}

export default CellIndexByGiAndParameter;

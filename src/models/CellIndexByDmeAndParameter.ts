import { PassengerTypes } from '../types/enums';
import { indexKey } from '../utils/index-key';

import Cell from './Cell';
import DistanceMatrixElement from './DistanceMatrixElement';
import Reference from './Reference';

class CellIndexByDmeAndParameter {
  cellIndex: Map<string, Cell>;
  profileRefs: Set<string>;
  constructor(cells: Cell[]) {
    const findDme = (cell: Cell) =>
      cell.priceableObjectRefs.find(
        (ref: Reference) =>
          ref.nameOfClass === DistanceMatrixElement.getNameOfClass()
      );
    const findProfile = (cell: Cell) =>
      cell.priceableObjectRefs.find((ref: Reference) =>
        (Object.values(PassengerTypes) as Array<string>).includes(
          ref.nameOfClass
        )
      );

    this.cellIndex = new Map();
    this.profileRefs = new Set();

    cells.forEach((cell: Cell) => {
      const profileRef = findProfile(cell)?.ref;

      this.cellIndex.set(indexKey(profileRef, findDme(cell)?.ref), cell);

      if (profileRef != null) {
        this.profileRefs.add(profileRef);
      }
    });
  }

  getByProfileAndDme(profileId: string, dmeId: string): Cell {
    return this.cellIndex.get(indexKey(profileId, dmeId)) as Cell;
  }
}

export default CellIndexByDmeAndParameter;

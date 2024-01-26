import { FareTableData } from '../types/interfaces';
import { BucketStateType } from '../types/types';

import BaseModel from './BaseModel';
import Cell from './Cell';
import FareFrame from './FareFrame';
import FarePrice from './FarePrice';
import Reference from './Reference';

const NAME_OF_CLASS = 'FareTable';

class FareTable extends BaseModel {
  prices: Array<FarePrice>;
  cells: Array<Cell>;
  tariffRef?: Reference;

  constructor(data: Partial<FareTableData> = {}) {
    super({ ...data, nameOfClass: NAME_OF_CLASS });

    this.prices = (data.prices || []).map((p) => new FarePrice(p));
    this.cells = (data.cells || []).map((c) => new Cell(c));

    if (data.tariffRef) {
      this.tariffRef = new Reference(data.tariffRef);
    }
  }

  static getNameOfClass() {
    return NAME_OF_CLASS;
  }

  addCell(cell: Cell) {
    if (!cell) {
      return this;
    } else {
      return this.withChanges({ cells: this.cells.concat(cell) });
    }
  }

  updateCell(cell: Cell) {
    const i = this.cells.findIndex((c) => c.id === cell.id);

    if (i > -1) {
      const cells = [
        ...this.cells.slice(0, i),
        cell,
        ...this.cells.slice(i + 1)
      ];

      return this.withChanges({ cells });
    }

    return this;
  }

  removeCell(cell: Cell) {
    const cells = this.cells.filter((c) => c !== cell);

    return this.withChanges({ cells });
  }

  removeCellsByPriceableObjectRefs(refs: string | Array<string>) {
    const refsArray = Array.isArray(refs) ? refs : [refs];
    const cells = this.cells.filter(
      (c) => !c.priceableObjectRefs.some((ref) => refsArray.includes(ref.ref))
    );

    return this.withChanges({ cells });
  }

  withVersion(version: string) {
    return super.withVersion(version).withChanges({
      prices: this.prices.map((p) => p.withVersion(version)),
      cells: this.cells.map((c) => c.withVersion(version))
    });
  }

  updateRefs(bucket: BucketStateType) {
    return super.updateRefs(bucket).withChanges({
      cells: this.cells.map((c) => c.updateRefs(bucket)),
      tariffRef: this.updateRef('tariffRef', bucket)
    });
  }

  toPayload(fareFrame: FareFrame) {
    return super.toPayload(fareFrame).withChanges({
      prices: this.prices.map((p) => p.toPayload(fareFrame)),
      cells: this.cells.map((c) => c.toPayload(fareFrame))
    });
  }
}

export default FareTable;

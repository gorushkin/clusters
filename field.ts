import { SIZE } from './index.ts';
import { Point } from './point.ts';
import { Position } from './position.ts';

export class Field {
  size: number;
  row: Point[] = [];
  rows: Point[][] = [];
  NEW_LINE = '\n';

  constructor(size: number) {
    this.size = size;
    this.initField();
  }

  getEmptyList = (size: number): number[] => {
    const list: number[] = [];
    for (let i = 0; i < size; i++) list.push(i);
    return list;
  };

  initField = () => {
    const rows = this.getEmptyList(SIZE).map((x) => {
      const row = this.getEmptyList(SIZE).map((y) => new Point(x, y));
      return row;
    });
    this.rows = rows;
  };

  print = (name: string = '') => {
    const result = this.rows
      .map((row) => row.map((item) => item.print()).join(' '))
      .join(this.NEW_LINE);
    console.log(name + this.NEW_LINE + result + this.NEW_LINE);
  };

  fillField = (position: Position) => {
    this.rows[position.x][position.y].fill();
  };

  goThroughAll = (cb: (point: Point) => void) => {
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        const point = this.rows[i][j];
        cb(point);
      }
    }
  };

  updatePoints = () => {
    // this.goThroughAll(point => point.toString());
    // this.goThroughAll((point) => point.getWeigth());
  };
}

import { SIZE } from './index.ts';
import { Neighbor, Point } from './point.ts';
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

  print = (name = '') => {
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

  getPoint = ({ x, y }: Neighbor) => this.rows[x][y];

  updatePoints = () => {
    console.log('update');

    this.goThroughAll((point) => {
      const neighbors = point.getNeighbors();

      const weight = neighbors
        .map((position) => this.getPoint(position))
        .filter((point) => point.isFilled);

      const extraWeight = point.isFilled ? 1 : 0;

      point.weight = weight.length + extraWeight;
    });
  };
}

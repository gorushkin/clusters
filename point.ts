import { RADIUS, SIZE } from './index.ts';

export type Neighbor = {
  x: number;
  y: number;
};

export class Point {
  isFilled = false;
  x: number;
  y: number;
  weight = -1;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  print = () => {
    const isPointUpdated = this.weight > -1;
    return isPointUpdated ? `[${this.weight}]` : `[${this.isFilled ? 'x' : ' '}]`;
  };

  get info() {
    return `{x:${this.x}, y:${this.y}}`;
  }

  toggle = () => (this.isFilled = !this.isFilled);

  fill = () => (this.isFilled = true);

  toString = () => this.print();

  getWeight = () => {
    console.log(';');
  };

  getMin = (value: number) => Math.max(0, value - RADIUS);

  getMax = (value: number) => Math.min(SIZE - 1, value + RADIUS);

  getNeighbors = (): Neighbor[] => {
    const minX = this.getMin(this.x);
    const minY = this.getMin(this.y);
    const maxX = this.getMax(this.x);
    const maxY = this.getMax(this.y);

    const neighbors = [];

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        // if (x === this.x && y === this.y) continue;
        neighbors.push({ x, y });
      }
    }

    return neighbors;
  };
}

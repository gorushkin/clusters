import { RADIUS, SIZE } from './index.ts';

export class Point {
  isFilled: boolean = false;
  x: number;
  y: number;
  weight = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  print() {
    return this.isFilled ? '[x]' : '[ ]';
  }

  toggle = () => (this.isFilled = !this.isFilled);

  fill = () => (this.isFilled = true);

  toString = () => this.print();

  getWeight = () => {
    console.log(';');
  };

  getMin = (value: number) => Math.max(0, value - RADIUS);

  getMax = (value: number) => Math.min(SIZE, value + RADIUS);

  getNeighbors = () => {
    const minX = this.getMin(this.x);
    const minY = this.getMin(this.y);
    const maxX = this.getMax(this.x);
    const maxY = this.getMax(this.y);

    for (let i = minX; i < maxX; i++) {
      for (let j = minY; j < maxY; j++) {
        console.log(i, j);
      }
    }
  };
}

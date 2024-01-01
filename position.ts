import { SIZE } from './index.ts';

export class Position {
  x: number;
  y: number;

  constructor() {
    this.x = this.getRandom(SIZE);
    this.y = this.getRandom(SIZE);
  }

  getRandom = (size: number) => Math.floor(Math.random() * size);
}

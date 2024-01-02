import { POSITIONS_AMOUNT, SIZE } from './index.ts';

const encoder = new TextEncoder();

const filepath = './positions.json';

export class Position {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x ?? this.getRandom(SIZE);
    this.y = y ?? this.getRandom(SIZE);
  }

  toString = () => ({ x: this.x, y: this.y });

  getRandom = (size: number) => Math.floor(Math.random() * size);
}

export const getRandomPositions = () => {
  const result = Array(POSITIONS_AMOUNT)
    .fill(0)
    .map((_) => new Position());
  return result;
};

export const printPositions = (positions: Position[]) => {
  return positions.map((position) => position.toString());
};

export const writePositions = (positions: Position[]) => {
  const json = JSON.stringify(printPositions(positions));
  const data = encoder.encode(json);

  Deno.writeFileSync(filepath, data);
};

export const readPositions = () => {
  const data = Deno.readTextFileSync(filepath);
  const parsedResult = JSON.parse(data) as { x: number; y: number }[];
  return parsedResult.map(({ x, y }) => new Position(x, y));
};

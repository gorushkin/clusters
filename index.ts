import { Field } from './field.ts';
import { Point } from './point.ts';
import { Position } from './position.ts';

export const POSITIONS_AMOUNT = 25;
export const RADIUS = 2;
export const SIZE = 10;

const field = new Field(5);

field.print('empty');

const getRandomPositions = () => {
  const result = Array(POSITIONS_AMOUNT)
    .fill(0)
    .map((_) => new Position());
  return result;
};

const positions = getRandomPositions();

positions.forEach((position) => {
  field.fillField(position);
});

field.print('filled');

field.updatePoints();

const point = new Point(2, 3);
point.getNeighbors();

import { Field } from './field.ts';
import { getRandomPositions } from './position.ts';

export const RADIUS = 1;
export const SIZE = 10;
export const POSITIONS_AMOUNT = 20;

const field = new Field(5);

const positions = getRandomPositions();
// const positions = readPositions();

positions.forEach((position) => {
  field.fillField(position);
});

field.print('filled');

field.updatePoints();

field.print('updated');

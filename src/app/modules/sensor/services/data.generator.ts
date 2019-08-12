import padStart from 'lodash.padStart';
import range from 'lodash.range';
import random from 'lodash.random';
import { getRandomDate } from '../../../utilities';
import { Sensor } from '../models';

const DATA_RANGE = range(1, 5001);
const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis odio quasi repudiandae! Ad, incidunt nisi. In neque optio quis? Beatae laborum minus molestias nihil velit voluptatibus. Cum esse recusandae tempore.';

export function dataGenerator(): Sensor[] {
  return DATA_RANGE.map(it => ({
    key: `Sensor-${padStart(it.toString(), 4, '0')}`,
    time: getRandomDate(new Date(2014, 0, 1)),
    description: LOREM_IPSUM,
    value: random(-5000, 5000)
  }));
}



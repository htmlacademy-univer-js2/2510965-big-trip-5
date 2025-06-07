import {mockPoints} from '../mock/point-mock.js';
import {toCamelCase} from '../utils/utils.js';

export class PointModel {
  #points = mockPoints.map((point)=>toCamelCase(point));

  get points() {
    return this.#points;
  }
}

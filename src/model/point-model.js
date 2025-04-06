import { points } from '../mock/point-mock';


export class PointModel {
  #points = points;

  get points() {
    return this.#points;
  }
}

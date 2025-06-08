import Observable from '../framework/observable.js';
import {FilterType} from '../constants/const';

export default class FilterModel extends Observable {
  #filterType = FilterType.EVERYTHING;
  get filter() {
    return this.#filterType;
  }

  setFilter(updateType, filter) {
    this.#filterType = filter;
    this._notify(updateType, filter);
  }
}

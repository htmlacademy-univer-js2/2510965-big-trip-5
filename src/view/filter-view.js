import AbstractView from '../framework/view/abstract-view';
import {capitalizeString} from '../utils/utils';

function createFilterTemplate(filter, actualFilterType){
  return `
    <form class="trip-filters" action="#" method="get">
            ${filter.length > 0 ? filter.map(({type,count})=>
    `
            <div class="trip-filters__filter">
                <input id="filter-${type}"
                class="trip-filters__filter-input  visually-hidden"
                type="radio"
                name="trip-filter"
                value="${type}"
                ${(count === 0 && type !== 'everything') && 'disabled'}
                ${type === actualFilterType ? 'checked' : ''}
                <label class="trip-filters__filter-label" for="filter-${type}">${capitalizeString(type)}</label>
            </div>
            `
  ).join('') : ''}
                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>
  `;
}

export default class Filter extends AbstractView{
  #filter;
  #actualFilterType;
  #onFilterTypeChange;

  constructor(filter, actualFilterType, onFilterTypeChange){
    super();
    this.#filter = filter;
    this.#onFilterTypeChange = onFilterTypeChange;
    this.#actualFilterType = actualFilterType;
    this.element.addEventListener('change', this.#onFilterChange);
  }

  #onFilterChange = (evt) => {
    evt.preventDefault();
    this.#onFilterTypeChange(evt.target.value);
  };

  get template() {
    return createFilterTemplate(this.#filter, this.#actualFilterType);
  }
}

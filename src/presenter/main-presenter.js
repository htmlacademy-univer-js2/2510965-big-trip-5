import Sort from '../view/sort-view.js';
import Filter from '../view/filter-view.js';
import {render, RenderPosition } from '../framework/render.js';
import {updateItem, sortPointByDay, sortPointByTime} from '../utils/utils.js';
import {generateFilters} from '../utils/filter.js';
import EmptyList from '../view/empty-list-view.js';
import PointPresenter from './point-presenter.js';
import {SortType} from '../constants/const.js';

export default class MainPresenter {
  #pointModel;
  #offerModel;
  #destinationModel;
  #container;
  #listPoints = [];
  #pointsPresenters = new Map();
  #sortComponent = null;
  #actualSortType = SortType.DAY;

  constructor(container, pointModel, offerModel, destinationModel) {
    this.#container = container;
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
  }

  init(){
    const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
    const filter = generateFilters(this.#pointModel.points);

    render(new Filter(filter), siteHeaderFiltersElement);

    if (filter[0].count === 0){
      render(new EmptyList(), this.#container);
    } else {
      this.#renderSort();

      const tripEventsList = document.createElement('ul');
      tripEventsList.className = 'trip-events__list';
      this.#container.appendChild(tripEventsList);

      this.#listPoints = [...this.#pointModel.points];
      this.#renderPointsList();
    }
  }

  #renderPointsList(){
    for(let i = 0; i < this.#listPoints.length; i++){
      const pointPresenter = new PointPresenter(this.container,this.offerModel,
        this.destinationModel,this.#handlePointChange,this.#onModeChange);
      pointPresenter.init(this.#listPoints[i]);
      this.#pointsPresenters.set(this.#listPoints[i].id,pointPresenter);
    }
  }

  #renderSort(){
    this.#sortComponent = new Sort({onSortTypeChange: this.#handleSortTypeChange});
    render(this.#sortComponent,this.#container,RenderPosition.AFTERBEGIN);
  }

  #clearPointsList(){
    this.#pointsPresenters.forEach((pointPresenter)=>pointPresenter.destroy());
    this.#pointsPresenters.clear();
  }

  #handlePointChange = (updatePoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatePoint);
    this.#pointsPresenters.get(updatePoint.id).init(updatePoint);
  };

  #handleSortTypeChange = (changeSortType) => {
    if(changeSortType !== this.#actualSortType){
      switch(changeSortType){
        case SortType.DAY:
          this.#listPoints.sort(sortPointByDay);
          break;
        case SortType.TIME:
          this.#listPoints.sort(sortPointByTime);
          break;
        case SortType.PRICE:
          this.#listPoints.sort((a,b)=>b.price - a.price);
          break;
      }
      this.#actualSortType = changeSortType;
      this.#clearPointsList();
      this.#renderPointsList();
    }
  };

  #onModeChange = () =>{
    this.#pointsPresenters.forEach((pointPresenter)=>pointPresenter.resetView());
  };

  get pointModel(){
    return this.#pointModel;
  }

  get offerModel(){
    return this.#offerModel;
  }

  get destinationModel(){
    return this.#destinationModel;
  }

  get container(){
    return this.#container;
  }
}

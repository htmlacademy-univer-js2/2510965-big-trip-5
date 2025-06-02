import Sort from '../view/sort-view';
import Filter from '../view/filter-view';
import {render} from '../framework/render';
import {updateItem} from '../utils/utils';
import {generateFilters} from '../utils/filter';
import EmptyList from '../view/empty-list-view';
import PointPresenter from './point-presenter';


export default class MainPresenter {
  #pointModel;
  #offerModel;
  #destinationModel;
  #container;
  #listPoints = [];
  #pointsPresenters = new Map();

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
      render(new Sort(), this.#container);

      const tripEventsList = document.createElement('ul');
      tripEventsList.className = 'trip-events__list';
      this.#container.appendChild(tripEventsList);

      this.#listPoints = [...this.#pointModel.points];
      for(let i = 0; i < this.pointModel.points.length; i++){
        this.#renderPoint(this.pointModel.points[i]);
      }
    }
  }

  #renderPoint(pointData){
    const pointPresenter = new PointPresenter(this.container,this.offerModel,
      this.destinationModel,this.#handlePointChange,this.#onModeChange);
    pointPresenter.init(pointData);
    this.#pointsPresenters.set(pointData.id,pointPresenter);
  }

  #clearPointsPresenters(){
    this.#pointsPresenters.forEach((pointPresenter)=>pointPresenter.destroy());
    this.#pointsPresenters.clear();
  }

  #handlePointChange = (updatePoint) => {
    this.#listPoints = updateItem(this.#listPoints, updatePoint);
    this.#pointsPresenters.get(updatePoint.id).init(updatePoint);
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

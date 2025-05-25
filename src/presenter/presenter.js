import EditForm from '../view/edit-form-view';
import Point from '../view/point-view';
import Sort from '../view/sort-view';
import Filter from '../view/filter-view';
import CreateForm from '../view/create-form-view';
import PointPresenter from './point-presenter';
import { render, RenderPosition } from '../framework/render';
import { sortByDay, sortByTime, sortByPrice } from './utils/sort-utils'; // We'll create this

export default class MainPresenter {
  #pointModel;
  #offerModel;
  #destinationModel;
  #container;
  #pointPresenters = new Map();
  #createForm = null;
  #sortComponent = null;
  #currentSortType = 'sort-price';

  constructor(container, pointModel, offerModel, destinationModel) {
    this.#container = container;
    this.tripEventsList = document.createElement('ul');
    this.tripEventsList.className = 'trip-events__list';
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
  }

  init() {
    const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
    render(new Filter(), siteHeaderFiltersElement);

    this.#sortComponent = new Sort();
    render(this.#sortComponent, this.#container, RenderPosition.AFTERBEGIN);
    this.#sortComponent.element.addEventListener('change', this.#sortChangeHandler.bind(this));

    this.#container.appendChild(this.tripEventsList);

    this.#createForm = new CreateForm();
    this.#createForm.element.querySelector('.event--edit').addEventListener('submit', this.#handleCreateFormSubmit.bind(this));
    this.#createForm.element.querySelector('.event__reset-btn').addEventListener('click', this.#handleCreateFormCancel.bind(this));

    render(this.#createForm, this.tripEventsList, RenderPosition.AFTERBEGIN);

    this.#renderPoints();
  }

  resetAllViews() {
    this.#pointPresenters.forEach((presenter) => presenter.resetView());
    if (this.#createForm.element.parentElement) {
      this.#createForm.element.remove();
    }
  }

  #handleDataChange(updatedPoint) {
    this.#pointModel.points = this.#pointModel.points.map((point) =>
      point.id === updatedPoint.id ? updatedPoint : point
    );
    const presenter = this.#pointPresenters.get(updatedPoint.id);
    presenter.init(updatedPoint);
  }

  #handleCreateFormSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);

    const newPoint = {
      id: Math.random().toString(36).substr(2, 9), // Simple unique ID generator
      type: formData.get('event-type'),
      destination: this.#destinationModel.destinations.find((dest) => dest.name === formData.get('event-destination'))?.id || null,
      date_from: formData.get('event-start-time'),
      date_to: formData.get('event-end-time'),
      base_price: parseInt(formData.get('event-price'), 10) || 0,
      offers: Array.from(formData.keys())
        .filter((key) => key.startsWith('event-offer-'))
        .map((key) => {
          const offerTitle = form.querySelector(`[for="${key}-1"] .event__offer-title`).textContent;
          return this.#offerModel.getOffersByType(formData.get('event-type')).offers.find((offer) => offer.title === offerTitle)?.id;
        })
        .filter(Boolean),
      is_favorite: false,
    };

    this.#pointModel.points = [...this.#pointModel.points, newPoint];
    this.#createForm.element.remove();
    this.#renderPoints();
  }

  #handleCreateFormCancel() {
    this.#createForm.element.remove();
  }

  #sortChangeHandler(evt) {
    if (evt.target.name === 'trip-sort') {
      this.#currentSortType = evt.target.value;
      this.#renderPoints();
    }
  }

  #renderPoints() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    let sortedPoints = [...this.#pointModel.points];
    switch (this.#currentSortType) {
      case 'sort-day':
        sortedPoints = sortedPoints.sort(sortByDay);
        break;
      case 'sort-time':
        sortedPoints = sortedPoints.sort(sortByTime);
        break;
      case 'sort-price':
        sortedPoints = sortedPoints.sort(sortByPrice);
        break;
    }

    for (const point of sortedPoints) {
      this.#renderPoint(point);
    }
  }

  #renderPoint(pointData) {
    const pointPresenter = new PointPresenter(
      this.tripEventsList,
      this.#pointModel,
      this.#offerModel,
      this.#destinationModel,
      this.#handleDataChange.bind(this),
      this.resetAllViews.bind(this)
    );
    pointPresenter.init(pointData);
    this.#pointPresenters.set(pointData.id, pointPresenter);
  }

  get pointModel() {
    return this.#pointModel;
  }

  get offerModel() {
    return this.#offerModel;
  }

  get destinationModel() {
    return this.#destinationModel;
  }

  get container() {
    return this.#container;
  }
}

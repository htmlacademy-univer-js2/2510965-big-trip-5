import { render } from './render';
import EditForm from './view/edit-form-view';
import CreateForm from './view/create-form-view';
import Point from './view/point-view';
import Sort from './view/sort-view';
import Filter from './view/filter-view';
import { getRandomNumber } from './utils/utils';
import { DestinationModel } from './model/destination-model';
import { OfferModel } from './model/offer-model';
import { PointModel } from './model/point-model';

export default class MainPresenter {
  constructor(container) {
    this.container = container;

    this.destinationModel = new DestinationModel();
    this.offerModel = new OfferModel();
    this.pointModel = new PointModel();

    this.tripEventsList = document.createElement('ul');
    this.tripEventsList.className = 'trip-events__list';
  }

  init() {
    const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
    render(new Filter(), siteHeaderFiltersElement);

    render(new Sort(), this.container);

    this.container.appendChild(this.tripEventsList);

    const points = this.pointModel.points;
    const destinations = this.destinationModel.destinations;
    const offers = this.offerModel.offers;

    const randomPointIndex = getRandomNumber(points.length - 1);
    render(new EditForm(this.pointModel, randomPointIndex), this.tripEventsList);

    render(new CreateForm(), this.tripEventsList);

    for (let i = 0; i < points.length; i++) {
      render(new Point(this.pointModel, i), this.tripEventsList);
    }
  }
}

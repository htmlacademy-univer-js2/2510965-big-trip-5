import MainPresenter from './presenter/main-presenter';
import FilterPresenter from './presenter/filter-presenter';
import FilterModel from './model/filter-model';
import PointModel from './model/point-model';
import DestinationModel from './model/destination-model';
import OfferModel from './model/offer-model';
import NewPointView from './view/new-point-view.js';
import { render, RenderPosition } from './framework/render.js';
import PointsApiService from './api/point-api-service';
import OffersApiService from './api/offer-api-service';
import DestinationsApiService from './api/destination-api-service';

const AUTHORIZATION = 'Basic er883jdzbdw';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';
const siteHeaderFiltersElement = document.querySelector('.trip-controls__filters');
const siteBodySortElement = document.querySelector('.trip-events');
const siteHeaderElement = document.querySelector('.trip-main');
const filterModel = new FilterModel();
const pointModel = new PointModel(new PointsApiService(END_POINT, AUTHORIZATION));
const offerModel = new OfferModel(new OffersApiService(END_POINT, AUTHORIZATION));
const destinationModel = new DestinationModel(new DestinationsApiService(END_POINT, AUTHORIZATION));
const filterPresenter = new FilterPresenter(
  siteHeaderFiltersElement,
  filterModel,
  pointModel
);
const mainPresenter = new MainPresenter(
  siteBodySortElement,
  pointModel,
  offerModel,
  destinationModel,
  filterModel,
  onNewPointFormClose
);
const newPointButtonComponent = new NewPointView(onNewPointButtonClick);

function onNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

function onNewPointButtonClick() {
  mainPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

filterPresenter.init();
mainPresenter.init();

Promise.all([
  pointModel.init(),
  offerModel.init(),
  destinationModel.init()
]).then(() => {
  render(newPointButtonComponent, siteHeaderElement, RenderPosition.BEFOREEND);
});

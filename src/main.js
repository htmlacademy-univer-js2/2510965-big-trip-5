import MainPresenter from './presenter/main-presenter';
import { PointModel } from './model/point-model';
import { DestinationModel } from './model/destination-model';
import { OfferModel } from './model/offer-model';

const pointModel = new PointModel();
const destinationModel = new DestinationModel();
const offerModel = new OfferModel();

const siteBodySortElement = document.querySelector('.trip-events');

const mainPresenter = new MainPresenter(siteBodySortElement, pointModel, destinationModel, offerModel);

mainPresenter.init();

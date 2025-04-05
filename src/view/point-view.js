import { createElement } from '../render';
import { capitalizeString, getDurationTime, humanizeDate } from '../utils/utils';
import { DestinationModel } from '../model/destination-model';
import { OfferModel } from '../model/offer-model';
import { PointModel } from '../model/point-model';


const destinationModel = new DestinationModel();
const offerModel = new OfferModel();
const pointModel = new PointModel();

function createPointTemplate(point, iterator) {
  const {
    base_price: price,
    date_from: dateFrom,
    date_to: dateTo,
    destination: destinationId,
    is_favorite: isFavorite,
    offers: offersId,
    type,
  } = point.points[iterator];

  const destination = destinationModel.getDestinationById(destinationId);
  const { name } = destination || {};

  const allOffers = offerModel.getOffersByType(type)?.offers || [];
  const selectedOffers = offersId.map((id) => offerModel.getOffersById(type, id));

  const date = humanizeDate(dateFrom);

  return `
    <li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="${humanizeDate(dateFrom, 'YYYY-MM-DDTHH:mm')}">${date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${capitalizeString(type)} ${name}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${humanizeDate(dateFrom, 'YYYY-MM-DDTHH:mm')}">${humanizeDate(dateFrom, 'HH:mm')}</time>
            —
            <time class="event__end-time" datetime="${humanizeDate(dateTo, 'YYYY-MM-DDTHH:mm')}">${humanizeDate(dateTo, 'HH:mm')}</time>
          </p>
          <p class="event__duration">${getDurationTime(dateFrom, dateTo)}</p>
        </div>
        <p class="event__price">
          €&nbsp;<span class="event__price-value">${price}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${selectedOffers.map((offer) => `
            <li class="event__offer">
              <span class="event__offer-title">${offer.title}</span>
              +€&nbsp;
              <span class="event__offer-price">${offer.price}</span>
            </li>
          `).join('')}
        </ul>
        <button class="event__favorite-btn ${isFavorite && 'event__favorite-btn--active'}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
}

export default class Point {
  constructor(model, i) {
    this.pointModel = model;
    this.iterator = i;
  }

  getTemplate() {
    return createPointTemplate(this.pointModel, this.iterator);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

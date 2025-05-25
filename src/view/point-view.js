import {capitalizeString, getDurationTime, humanizeDate} from '../utils/utils';
import AbstractView from '../framework/view/abstract-view';

function createPointTemplate(pointModel, offerModel, destinationModel) {
  const {
    basePrice: price,
    dateFrom,
    dateTo,
    destination: destinationId,
    isFavorite,
    offers: offersId,
    type
  } = pointModel;

  const pointOffers = [];
  for(const offerId of offersId){
    pointOffers.push(offerModel.getOffersById(type, offerId));
  }

  const {name} = destinationModel.getDestinationById(destinationId);
  const date = humanizeDate(dateFrom);

  return `
    <li class="trip-events__item">
      <div className="event">
        <time className="event__date" datetime="${humanizeDate(dateFrom,'YYYY-MM-DDTHH:mm')}">${date}</time>
        <div className="event__type">
          <img className="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
        </div>
        <h3 className="event__title">${capitalizeString(type)} ${name}</h3>
        <div className="event__schedule">
          <p className="event__time">
            <time className="event__start-time" datetime="${humanizeDate(dateFrom,'YYYY-MM-DDTHH:mm')}">${humanizeDate(dateFrom,'HH:mm')}</time>
            —
            <time className="event__end-time" datetime="${humanizeDate(dateTo,'YYYY-MM-DDTHH:mm')}">${humanizeDate(dateTo,'HH:mm')}</time>
          </p>
          <p className="event__duration">${getDurationTime(dateFrom, dateTo)}</p>
        </div>
        <p className="event__price">
          €&nbsp;<span className="event__price-value">${price}</span>
        </p>
        <h4 className="visually-hidden">Offers:</h4>
        <ul className="event__selected-offers">
          ${pointOffers.map((offer) =>`
            <li className="event__offer">
              <span className="event__offer-title">${offer.title}</span>
              +€&nbsp;
              <span className="event__offer-price">${offer.price}</span>
            </li>
          `).join('')}
        </ul>
        <button className="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span className="visually-hidden">Add to favorite</span>
          <svg className="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
          </svg>
        </button>
        <button className="event__rollup-btn" type="button">
          <span className="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
}

export default class Point extends AbstractView {
  #pointModel;
  #offerModel;
  #destinationModel;
  #handleRollupClick;

  constructor(pointModel, offerModel, destinationModel, onButtonClick) {
    super();
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
    this.#handleRollupClick = onButtonClick;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#handleRollupClick);
  }

  get template() {
    return createPointTemplate(this.#pointModel, this.#offerModel, this.#destinationModel);
  }
}

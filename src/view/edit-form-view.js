import { createElement } from '../render';
import { capitalizeString, getOfferKeyword, humanizeDate } from '../utils/utils';
import { DestinationModel } from '../model/destination-model';
import { OfferModel } from '../model/offer-model';
import { PointModel } from '../model/point-model';


const destinationModel = new DestinationModel();
const offerModel = new OfferModel();
const pointModel = new PointModel();

function createFormTemplate(point, iterator) {
  const {
    base_price: price,
    date_from: dateFrom,
    date_to: dateTo,
    destination: destinationId,
    offers: offersId,
    type,
  } = point.points[iterator];

  const destination = destinationModel.getDestinationById(destinationId);
  const { name, description, pictures } = destination || {};

  const allOffers = offerModel.getOffersByType(type)?.offers || [];
  const selectedOffers = offersId.map((id) => offerModel.getOffersById(type, id));

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">
            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant']
                  .map((eventType) => `
                    <div class="event__type-item">
                      <input id="event-type-${eventType}-1" class="event__type-input visually-hidden" type="radio" name="event-type" value="${eventType}" ${
                    eventType === type ? 'checked' : ''
                  }>
                      <label class="event__type-label event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalizeString(eventType)}</label>
                    </div>
                  `)
                  .join('')}
              </fieldset>
            </div>
          </div>
          <div class="event__field-group event__field-group--destination">
            <label class="event__label event__type-output" for="event-destination-1">
              ${capitalizeString(type)}
            </label>
            <input class="event__input event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name || ''}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${destinationModel.destinations.map(({ name }) => `<option value="${name}"></option>`).join('')}
            </datalist>
          </div>
          <div class="event__field-group event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDate(dateFrom, 'DD/MM/YY HH:mm')}">
            —
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDate(dateTo, 'DD/MM/YY HH:mm')}">
          </div>
          <div class="event__field-group event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
          </div>
          <button class="event__save-btn btn btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${allOffers.length > 0 ? `
            <section class="event__section event__section--offers">
              <h3 class="event__section-title event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                ${allOffers.map((offer) => {
                  const keyword = getOfferKeyword(offer.title);
                  return `
                    <div class="event__offer-selector">
                      <input class="event__offer-checkbox visually-hidden" id="event-offer-${keyword}-1" type="checkbox" name="event-offer-${keyword}" ${
                    selectedOffers.includes(offer) ? 'checked' : ''
                  }>
                      <label class="event__offer-label" for="event-offer-${keyword}-1">
                        <span class="event__offer-title">${offer.title}</span>
                        +€&nbsp;
                        <span class="event__offer-price">${offer.price}</span>
                      </label>
                    </div>
                  `;
                }).join('')}
              </div>
            </section>
          ` : ''}
          ${(description || pictures?.length > 0) ? `
            <section class="event__section event__section--destination">
              ${description && `
                <h3 class="event__section-title event__section-title--destination">Destination</h3>
                <p class="event__destination-description">${description}</p>
              `}
              ${pictures?.length > 0 ? `
                <div class="event__photos-container">
                  <div class="event__photos-tape">
                    ${pictures.map((picture) => `
                      <img class="event__photo" src="${picture.src}" alt="${picture.description}">
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </section>
          ` : ''}
        </section>
      </form>
    </li>
  `;
}

export default class EditForm {
  constructor(model, i) {
    this.pointModel = model;
    this.iterator = i;
  }

  getTemplate() {
    return createFormTemplate(this.pointModel, this.iterator);
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

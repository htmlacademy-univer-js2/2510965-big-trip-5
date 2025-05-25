import AbstractView from './framework/view/abstract-view';
import { capitalizeString, humanizeDate } from '../utils/utils';

function createFormTemplate(offerModel, destinationModel) {
  const allDestinations = destinationModel.destinations;
  const allOffers = offerModel.getOffersByType('flight')?.offers || [];

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'].map((type) => `
                  <div class="event__type-item">
                    <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${type === 'flight' ? 'checked' : ''}>
                    <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeString(type)}</label>
                  </div>
                `).join('')}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              Flight
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="" list="destination-list-1">
            <datalist id="destination-list-1">
              ${allDestinations.map((dest) => `<option value="${dest.name}"></option>`).join('')}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeDate(new Date(), 'DD/MM/YY HH:mm')}">
            —
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeDate(new Date(), 'DD/MM/YY HH:mm')}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              €
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="0">
          </div>


          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
        </header>
        <section class="event__details">
          ${allOffers.length > 0 ? `
            <section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>
              <div class="event__available-offers">
                ${allOffers.map((offer) => `
                  <div class="event__offer-selector">
                    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-${offer.id}">
                    <label class="event__offer-label" for="event-offer-${offer.id}-1">
                      <span class="event__offer-title">${offer.title}</span>
                      +€&nbsp;
                      <span class="event__offer-price">${offer.price}</span>
                    </label>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}
        </section>
      </form>
    </li>
  `;
}

export default class CreateForm extends AbstractView {
  #offerModel;
  #destinationModel;

  constructor(offerModel, destinationModel) {
    super();
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
  }

  get template() {
    return createFormTemplate(this.#offerModel, this.#destinationModel);
  }
}


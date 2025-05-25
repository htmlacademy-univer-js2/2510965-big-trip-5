import Point from '../view/point-view';
import EditForm from '../view/edit-form-view';
import { render, replace, remove } from '../framework/render';

export default class PointPresenter {
  #container;
  #pointModel;
  #offerModel;
  #destinationModel;
  #pointComponent = null;
  #editComponent = null;
  #point = null;
  #handleDataChange;
  #handleResetAll;

  constructor(container, pointModel, offerModel, destinationModel, handleDataChange, handleResetAll) {
    this.#container = container;
    this.#pointModel = pointModel;
    this.#offerModel = offerModel;
    this.#destinationModel = destinationModel;
    this.#handleDataChange = handleDataChange;
    this.#handleResetAll = handleResetAll;
  }

  init(point) {
    this.#point = point;

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        this.resetView();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const onPointButtonClick = () => {
      this.#handleResetAll();
      this.#replacePointToEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    };

    const onEditButtonClick = () => {
      this.resetView();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const onFormSubmit = (evt) => {
      evt.preventDefault();
      const form = evt.target;
      const formData = new FormData(form);

      const updatedPoint = {
        ...this.#point,
        type: formData.get('event-type'),
        destination: this.#destinationModel.destinations.find((dest) => dest.name === formData.get('event-destination'))?.id || this.#point.destination,
        date_from: formData.get('event-start-time'),
        date_to: formData.get('event-end-time'),
        base_price: parseInt(formData.get('event-price'), 10) || this.#point.base_price,
        offers: Array.from(formData.keys())
          .filter((key) => key.startsWith('event-offer-'))
          .map((key) => {
            const offerTitle = form.querySelector(`[for="${key}-1"] .event__offer-title`).textContent;
            return this.#offerModel.getOffersByType(formData.get('event-type')).offers.find((offer) => offer.title === offerTitle)?.id;
          })
          .filter(Boolean),
      };

      this.#handleDataChange(updatedPoint);
      this.resetView();
      document.removeEventListener('keydown', escKeyDownHandler);
    };

    const onFavoriteClick = () => {
      this.#handleDataChange({ ...this.#point, is_favorite: !this.#point.is_favorite });
    };

    this.#pointComponent = new Point(point, this.#offerModel, this.#destinationModel, onPointButtonClick);
    this.#editComponent = new EditForm(point, this.#offerModel, this.#destinationModel, onFormSubmit, onEditButtonClick);

    this.#pointComponent.element.querySelector('.event__favorite-btn').addEventListener('click', onFavoriteClick);

    render(this.#pointComponent, this.#container);
  }

  resetView() {
    if (this.#editComponent.element.parentElement) {
      replace(this.#pointComponent, this.#editComponent);
    }
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#editComponent);
  }

  #replacePointToEdit() {
    replace(this.#editComponent, this.#pointComponent);
  }
}


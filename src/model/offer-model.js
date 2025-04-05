import { offers } from "../mock/offer-mock";


export class OfferModel {
    #offers = offers;
  
    get offers() {
      return this.#offers;
    }
  
    getOffersById(type, id){
      const offerGroup = this.#offers.find((offer) => offer.type === type);
      return id
        ? offerGroup.offers.find((item) => item.id === id)
        : offerGroup.offers;
    }
  
    getOffersByType(type) {
      return this.#offers.find((offer) => offer.type === type);
    }
}

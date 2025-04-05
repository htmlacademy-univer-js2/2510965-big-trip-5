import { destinations } from "../mock/destination-mock";


export class DestinationModel {
  #destination = destinations;

  get destinations() {
    return this.#destination;
  }

  getDestinationById(id){
    return this.#destination.find((item)=>item.id === id);
  }
}

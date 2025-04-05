import { getRandomNumber } from "../utils/utils";


const offers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 'taxi1',
        title: 'Upgrade to business class',
        price: getRandomNumber(200, 50)
      },
      {
        id: 'taxi2',
        title: 'Choose the radio station',
        price: getRandomNumber(150, 30)
      },
      {
        id: 'taxi3',
        title: 'Choose temperature',
        price: getRandomNumber(100, 20)
      },
      {
        id: 'taxi4',
        title: 'Child seat',
        price: getRandomNumber(80, 20)
      }
    ]
  },
  {
    type: 'bus',
    offers: [
      {
        id: 'bus1',
        title: 'Infotainment system',
        price: getRandomNumber(150, 40)
      },
      {
        id: 'bus2',
        title: 'Order meal',
        price: getRandomNumber(180, 50)
      },
      {
        id: 'bus3',
        title: 'Extra legroom seat',
        price: getRandomNumber(120, 30)
      }
    ]
  },
  {
    type: 'train',
    offers: [
      {
        id: 'train1',
        title: 'Book a taxi at arrival',
        price: getRandomNumber(200, 60)
      },
      {
        id: 'train2',
        title: 'Order breakfast',
        price: getRandomNumber(180, 50)
      },
      {
        id: 'train3',
        title: 'Private compartment',
        price: getRandomNumber(300, 100)
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 'flight1',
        title: 'Choose meal',
        price: getRandomNumber(250, 80)
      },
      {
        id: 'flight2',
        title: 'Choose seats',
        price: getRandomNumber(200, 50)
      },
      {
        id: 'flight3',
        title: 'Priority boarding',
        price: getRandomNumber(150, 40)
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 'checkin1',
        title: 'Choose check-in time',
        price: getRandomNumber(150, 30)
      },
      {
        id: 'checkin2',
        title: 'Add breakfast',
        price: getRandomNumber(120, 40)
      },
      {
        id: 'checkin3',
        title: 'Late checkout',
        price: getRandomNumber(100, 30)
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: []
  },
  {
    type: 'ship',
    offers: [
      {
        id: 'ship1',
        title: 'Business class upgrade',
        price: getRandomNumber(300, 100)
      },
      {
        id: 'ship2',
        title: 'Add luggage',
        price: getRandomNumber(200, 50)
      },
      {
        id: 'ship3',
        title: 'Cabin with window',
        price: getRandomNumber(250, 80)
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 'drive1',
        title: 'Automatic transmission',
        price: getRandomNumber(150, 40)
      },
      {
        id: 'drive2',
        title: 'Air conditioning',
        price: getRandomNumber(120, 30)
      },
      {
        id: 'drive3',
        title: 'GPS navigation',
        price: getRandomNumber(100, 25)
      }
    ]
  },
  {
    type: 'restaurant',
    offers: [
      {
        id: 'restaurant1',
        title: 'Live music',
        price: getRandomNumber(180, 50)
      },
      {
        id: 'restaurant2',
        title: 'VIP area',
        price: getRandomNumber(200, 60)
      },
      {
        id: 'restaurant3',
        title: 'Sommelier service',
        price: getRandomNumber(250, 80)
      }
    ]
  }
];

export { offers };
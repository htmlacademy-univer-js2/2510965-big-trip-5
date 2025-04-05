import { getRandomNumber } from "../utils/utils";


const destinations = [
  {
    id: 1,
    description: 'Paris - the city of love and lights',
    name: 'Paris',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/paris?random=${getRandomNumber(100)}`,
        description: 'Eiffel Tower view'
      },
      {
        src: `https://loremflickr.com/300/200/paris?random=${getRandomNumber(100)}`,
        description: 'Louvre museum'
      }
    ]
  },
  {
    id: 2,
    description: 'Amsterdam - is a beautiful city',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/amsterdam?random=${getRandomNumber(100)}`,
        description: 'Amsterdam canals at sunset'
      },
      {
        src: `https://loremflickr.com/300/200/amsterdam?random=${getRandomNumber(100)}`,
        description: 'Amsterdam historic district'
      }
    ]
  },
  {
    id: 3,
    description: 'Rome - the eternal city',
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/rome?random=${getRandomNumber(100)}`,
        description: 'Colosseum at dusk'
      },
      {
        src: `https://loremflickr.com/300/200/rome?random=${getRandomNumber(100)}`,
        description: 'Trevi Fountain'
      }
    ]
  },
  {
    id: 4,
    description: 'Barcelona - vibrant Catalan capital',
    name: 'Barcelona',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/barcelona?random=${getRandomNumber(100)}`,
        description: 'Sagrada Familia'
      },
      {
        src: `https://loremflickr.com/300/200/barcelona?random=${getRandomNumber(100)}`,
        description: 'Park Güell'
      }
    ]
  },
  {
    id: 5,
    description: 'Berlin - city of contrasts',
    name: 'Berlin',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/berlin?random=${getRandomNumber(100)}`,
        description: 'Brandenburg Gate'
      },
      {
        src: `https://loremflickr.com/300/200/berlin?random=${getRandomNumber(100)}`,
        description: 'Berlin Wall art'
      }
    ]
  },
  {
    id: 6,
    description: 'Prague - golden city',
    name: 'Prague',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/prague?random=${getRandomNumber(100)}`,
        description: 'Charles Bridge'
      },
      {
        src: `https://loremflickr.com/300/200/prague?random=${getRandomNumber(100)}`,
        description: 'Prague Castle'
      }
    ]
  },
  {
    id: 7,
    description: 'Vienna - imperial capital',
    name: 'Vienna',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/vienna?random=${getRandomNumber(100)}`,
        description: 'Schönbrunn Palace'
      },
      {
        src: `https://loremflickr.com/300/200/vienna?random=${getRandomNumber(100)}`,
        description: 'St. Stephen\'s Cathedral'
      }
    ]
  },
  {
    id: 8,
    description: 'Venice - city of canals',
    name: 'Venice',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/venice?random=${getRandomNumber(100)}`,
        description: 'Grand Canal'
      },
      {
        src: `https://loremflickr.com/300/200/venice?random=${getRandomNumber(100)}`,
        description: 'Rialto Bridge'
      }
    ]
  },
  {
    id: 9,
    description: 'London - cosmopolitan capital',
    name: 'London',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/london?random=${getRandomNumber(100)}`,
        description: 'Big Ben and Parliament'
      },
      {
        src: `https://loremflickr.com/300/200/london?random=${getRandomNumber(100)}`,
        description: 'Tower Bridge'
      }
    ]
  },
  {
    id: 10,
    description: 'Madrid - vibrant Spanish capital',
    name: 'Madrid',
    pictures: [
      {
        src: `https://loremflickr.com/300/200/madrid?random=${getRandomNumber(100)}`,
        description: 'Royal Palace'
      },
      {
        src: `https://loremflickr.com/300/200/madrid?random=${getRandomNumber(100)}`,
        description: 'Prado Museum'
      }
    ]
  }
];

export {destinations};
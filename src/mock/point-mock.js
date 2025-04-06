import { getRandomNumber } from '../utils/utils';

const points = [
  {
    'id': 1,
    'base_price': getRandomNumber(10000, 500),
    'date_from': '2025-02-10T08:00:00.000Z',
    'date_to': '2025-02-10T18:00:00.000Z',
    'destination': 1,
    'is_favorite': false,
    'offers': ['drive1', 'drive3'],
    'type': 'drive'
  },
  {
    'id': 2,
    'base_price': getRandomNumber(8000, 400),
    'date_from': '2025-02-15T12:30:00.000Z',
    'date_to': '2025-02-15T14:45:00.000Z',
    'destination': 2,
    'is_favorite': true,
    'offers': ['flight1', 'flight3'],
    'type': 'flight'
  },
  {
    'id': 3,
    'base_price': getRandomNumber(5000, 200),
    'date_from': '2025-02-20T09:15:00.000Z',
    'date_to': '2025-02-20T11:30:00.000Z',
    'destination': 3,
    'is_favorite': true,
    'offers': ['taxi2', 'taxi4'],
    'type': 'taxi'
  },
  {
    'id': 4,
    'base_price': getRandomNumber(3000, 100),
    'date_from': '2025-03-01T14:00:00.000Z',
    'date_to': '2025-03-01T16:20:00.000Z',
    'destination': 4,
    'is_favorite': true,
    'offers': ['bus1', 'bus3'],
    'type': 'bus'
  },
  {
    'id': 5,
    'base_price': getRandomNumber(7000, 300),
    'date_from': '2025-03-05T07:45:00.000Z',
    'date_to': '2025-03-05T09:30:00.000Z',
    'destination': 5,
    'is_favorite': false,
    'offers': ['train2', 'train3'],
    'type': 'train'
  },
  {
    'id': 6,
    'base_price': getRandomNumber(9000, 600),
    'date_from': '2025-03-10T20:00:00.000Z',
    'date_to': '2025-03-11T08:00:00.000Z',
    'destination': 6,
    'is_favorite': false,
    'offers': ['ship1', 'ship2'],
    'type': 'ship'
  },
  {
    'id': 7,
    'base_price': getRandomNumber(4000, 150),
    'date_from': '2025-03-15T13:00:00.000Z',
    'date_to': '2025-03-15T15:30:00.000Z',
    'destination': 7,
    'is_favorite': false,
    'offers': ['checkin1', 'checkin3'],
    'type': 'check-in'
  },
  {
    'id': 8,
    'base_price': getRandomNumber(2500, 100),
    'date_from': '2025-03-20T10:00:00.000Z',
    'date_to': '2025-03-20T12:00:00.000Z',
    'destination': 8,
    'is_favorite': false,
    'offers': ['restaurant1', 'restaurant2'],
    'type': 'restaurant'
  },
  {
    'id': 9,
    'base_price': getRandomNumber(1500, 50),
    'date_from': '2025-03-25T09:00:00.000Z',
    'date_to': '2025-03-25T18:00:00.000Z',
    'destination': 9,
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 10,
    'base_price': getRandomNumber(6000, 200),
    'date_from': '2025-04-01T11:30:00.000Z',
    'date_to': '2025-04-01T13:45:00.000Z',
    'destination': 10,
    'is_favorite': true,
    'offers': ['drive2', 'drive3'],
    'type': 'drive'
  }
];

export { points };

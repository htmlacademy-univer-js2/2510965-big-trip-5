import {getRandomNumber} from '../utils/utils';

const mockPoints = [
  {
    'id': 1,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-10T01:54:14.857Z',
    'dateTo': '2025-02-10T18:13:14.857Z',
    'destination': 1,
    'is_favorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 2,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-11T18:18:14.857Z',
    'dateTo': '2025-02-13T03:59:14.857Z',
    'destination': 2,
    'is_favorite': true,
    'offers': [
      'train1',
      'train2'
    ],
    'type': 'train'
  },
  {
    'id': 3,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-13T18:58:14.857Z',
    'dateTo': '2025-02-14T22:39:14.857Z',
    'destination': 1,
    'is_favorite': false,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': 4,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-16T17:14:14.857Z',
    'dateTo': '2025-02-17T12:48:14.857Z',
    'destination': 3,
    'is_favorite': false,
    'offers': [
      'taxi1',
      'taxi2',
      'taxi3'
    ],
    'type': 'taxi'
  },
  {
    'id': 5,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-19T11:32:14.857Z',
    'dateTo': '2025-02-19T19:11:14.857Z',
    'destination': 4,
    'is_favorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': 6,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-21T12:42:14.857Z',
    'dateTo': '2025-02-22T02:09:14.857Z',
    'destination': 5,
    'is_favorite': false,
    'offers': [
      'bus1',
      'bus2'
    ],
    'type': 'bus'
  },
  {
    'id': 7,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-22T11:06:14.857Z',
    'dateTo': '2025-02-23T04:29:14.857Z',
    'destination': 6,
    'is_favorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 8,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-24T12:19:14.857Z',
    'dateTo': '2025-02-25T23:24:14.857Z',
    'destination': 5,
    'is_favorite': true,
    'offers': [
      'checkin1'
    ],
    'type': 'check-in'
  },
  {
    'id': 9,
    'price': getRandomNumber(10000, 500),
    'dateFrom': '2025-02-27T17:36:14.857Z',
    'dateTo': '2025-03-01T03:31:14.857Z',
    'destination': 7,
    'is_favorite': true,
    'offers': [
      'train1',
      'train2'
    ],
    'type': 'train'
  },
  {
    'id': 10,
    'base_price': getRandomNumber(10000, 500),
    'date_from': '2025-04-04T04:45:14.857Z',
    'date_to': '2025-04-04T08:19:14.857Z',
    'destination': 6,
    'is_favorite': true,
    'offers': [
      'ship1',
      'ship2'
    ],
    'type': 'ship'
  }
];

export {mockPoints};

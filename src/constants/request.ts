import { Request } from '@/types/request';

const REQUESTS: Request[] = [
  {
    key: '1',
    name: 'Маршрут №1',
    firstPoint: { lat: 59.84660399, lng: 30.29496392 },
    secondPoint: { lat: 59.82934196, lng: 30.42423701 },
    thirdPoint: { lat: 59.83567701, lng: 30.38064206 },
  },
  {
    key: '2',
    name: 'Маршрут №2',
    firstPoint: { lat: 59.82934196, lng: 30.42423701 },
    secondPoint: { lat: 59.82761295, lng: 30.41705607 },
    thirdPoint: { lat: 59.84660399, lng: 30.29496392 },
  },
  {
    key: '3',
    name: 'Маршрут №3',
    firstPoint: { lat: 59.83567701, lng: 30.38064206 },
    secondPoint: { lat: 59.84660399, lng: 30.29496392 },
    thirdPoint: { lat: 59.82761295, lng: 30.41705607 },
  },
];

export { REQUESTS };

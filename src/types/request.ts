import { LatLngLiteral } from 'leaflet';

interface Request {
  key: string;
  name: string;
  firstPoint: LatLngLiteral;
  secondPoint: LatLngLiteral;
  thirdPoint: LatLngLiteral;
}

export type { Request };

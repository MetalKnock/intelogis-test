import { LatLngLiteral } from 'leaflet';

const getFormattedCoordinates = (coordinates: LatLngLiteral[]): string => {
  return coordinates.map((coordinate) => Object.values(coordinate).reverse()).join(';');
};

export { getFormattedCoordinates };

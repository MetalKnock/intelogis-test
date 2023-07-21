import { LatLngLiteral } from 'leaflet';
import { API_BASE, API_VERSION, ApiProfile, ApiService } from '@/constants/api';

const getFastestRoute = async (coordinates: LatLngLiteral[], query: string[]): Promise<unknown> => {
  const formattedCoordinates = coordinates
    .map((coordinate) => Object.values(coordinate).reverse())
    .join(';');

  const url = `${API_BASE}/${ApiService.route}/${API_VERSION}/${
    ApiProfile.driving
  }/${formattedCoordinates}?${query.join('&')}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};

export { getFastestRoute };

import { Polyline } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useAppSelector } from '@/hooks/useAppSelector';

const CustomPolyline = () => {
  const { routes } = useAppSelector((state) => state.route);

  if (routes.length === 0) {
    return null;
  }

  const {
    geometry: { coordinates },
  } = routes[0];

  const positions: LatLngExpression[] = coordinates.map((coordinate: [number, number]) => [
    coordinate[1],
    coordinate[0],
  ]);

  return <Polyline positions={positions} />;
};

export default CustomPolyline;

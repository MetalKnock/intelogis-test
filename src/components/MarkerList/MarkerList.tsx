import { memo } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import { MarkerType } from '@/types/marker';

interface CustomMarkersProps {
  markers: MarkerType[];
}

const MarkerList = memo(({ markers }: CustomMarkersProps) => {
  const map = useMap();

  if (markers.length === 0) {
    return null;
  }

  const bounds = markers.map(({ geocode }) => geocode);
  map.fitBounds(bounds);

  return (
    <>
      {markers.map(({ geocode, popUp }) => (
        <Marker key={`${geocode[0]}-${geocode[1]}`} position={geocode}>
          <Popup>{popUp}</Popup>
        </Marker>
      ))}
    </>
  );
});

export default MarkerList;

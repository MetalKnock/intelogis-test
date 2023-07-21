import { MapContainer, TileLayer } from 'react-leaflet';
import { CustomPolyline } from '../CustomPolyline';
import { MAP_ATTRIBUTION, MAP_CENTER, MAP_URL, MAP_ZOOM } from '@/constants/map';
import { MarkerListContainer } from '../MarkerListContainer';
import './Map.scss';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <MapContainer className='map' center={MAP_CENTER} zoom={MAP_ZOOM} scrollWheelZoom={false}>
      <TileLayer attribution={MAP_ATTRIBUTION} url={MAP_URL} />
      <MarkerListContainer />
      <CustomPolyline />
    </MapContainer>
  );
};

export default Map;

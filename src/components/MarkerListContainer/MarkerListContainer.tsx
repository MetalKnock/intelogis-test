import { useMemo } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';
import { MarkerType } from '@/types/marker';
import { MarkerList } from '../MarkerList';

const MarkerListContainer = () => {
  const { selectedRequest } = useAppSelector((state) => state.request);

  const markers: MarkerType[] = useMemo(() => {
    if (!selectedRequest) {
      return [];
    }

    const { firstPoint, secondPoint, thirdPoint } = selectedRequest;

    return [
      { geocode: [firstPoint.lat, firstPoint.lng], popUp: 'Точка 1' },
      { geocode: [secondPoint.lat, secondPoint.lng], popUp: 'Точка 2' },
      { geocode: [thirdPoint.lat, thirdPoint.lng], popUp: 'Точка 3' },
    ];
  }, [selectedRequest]);

  return <MarkerList markers={markers} />;
};

export default MarkerListContainer;

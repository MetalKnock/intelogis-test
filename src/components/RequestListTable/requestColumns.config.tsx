import { Request } from '@/types/request';
import { ColumnsType } from 'antd/es/table';
import { LatLngLiteral } from 'leaflet';
import { Typography } from 'antd';
import { TABLE_TITLE } from '@/constants/table';

const renderLatLng = ({ lat, lng }: LatLngLiteral) => (
  <>
    <Typography>{lat}</Typography>
    <Typography>{lng}</Typography>
  </>
);

const columns: ColumnsType<Request> = [
  {
    title: TABLE_TITLE.NAME,
    dataIndex: 'name',
    key: TABLE_TITLE.NAME,
  },
  {
    title: TABLE_TITLE.FIRST_POINT,
    dataIndex: 'firstPoint',
    key: TABLE_TITLE.FIRST_POINT,
    render: renderLatLng,
  },
  {
    title: TABLE_TITLE.SECOND_POINT,
    dataIndex: 'secondPoint',
    key: TABLE_TITLE.SECOND_POINT,
    render: renderLatLng,
  },
  {
    title: TABLE_TITLE.THIRD_POINT,
    dataIndex: 'thirdPoint',
    key: TABLE_TITLE.THIRD_POINT,
    render: renderLatLng,
  },
];

export { columns };

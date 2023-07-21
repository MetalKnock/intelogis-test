import { ColumnsType } from 'antd/es/table';
import { LatLngLiteral } from 'leaflet';
import { Typography } from 'antd';
import { Request } from '@/types/request';
import { TableTitle } from '@/constants/table';

const renderLatLng = ({ lat, lng }: LatLngLiteral) => (
  <>
    <Typography>{lat}</Typography>
    <Typography>{lng}</Typography>
  </>
);

const columns: ColumnsType<Request> = [
  {
    title: TableTitle.NAME,
    dataIndex: 'name',
    key: TableTitle.NAME,
  },
  {
    title: TableTitle.FIRST_POINT,
    dataIndex: 'firstPoint',
    key: TableTitle.FIRST_POINT,
    render: renderLatLng,
  },
  {
    title: TableTitle.SECOND_POINT,
    dataIndex: 'secondPoint',
    key: TableTitle.SECOND_POINT,
    render: renderLatLng,
  },
  {
    title: TableTitle.THIRD_POINT,
    dataIndex: 'thirdPoint',
    key: TableTitle.THIRD_POINT,
    render: renderLatLng,
  },
];

export { columns };

import { Table } from 'antd';
import { columns } from './requestColumns.config';
import { useAppSelector } from '@/hooks/useAppSelector';
import { Request } from '@/types/request';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { setSelectedRequest } from '@/store/reducers/requestReducer';
import './RequestListTable.scss';

const RequestListTable = () => {
  const { requests, selectedRequest } = useAppSelector((state) => state.request);
  const dispatch = useAppDispatch();

  const handleRouteClick = (record: Request) => {
    dispatch(setSelectedRequest(record));
  };

  return (
    <Table
      columns={columns}
      dataSource={requests}
      pagination={false}
      onRow={(record) => {
        return {
          onClick: () => {
            handleRouteClick(record);
          },
        };
      }}
      rowClassName={(record) => (record.key === selectedRequest?.key ? 'row row_selected' : 'row')}
    />
  );
};

export default RequestListTable;

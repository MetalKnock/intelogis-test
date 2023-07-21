import { Error } from '@/components/Error';
import { Map } from '@/components/Map';
import { RequestListTable } from '@/components/RequestListTable';
import { Row, Col } from 'antd';

const App = () => {
  return (
    <div className='app'>
      <Error />
      <Row>
        <Col xs={24} sm={24} md={12}>
          <RequestListTable />
        </Col>
        <Col xs={24} sm={24} md={12}>
          <Map />
        </Col>
      </Row>
    </div>
  );
};

export default App;

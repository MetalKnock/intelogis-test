import { message } from 'antd';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useEffect } from 'react';

const Error = () => {
  const { error } = useAppSelector((state) => state.route);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (error) {
      handleError();
    }
  }, [error]);

  const handleError = () => {
    messageApi.error(error);
  };

  return <>{contextHolder}</>;
};

export default Error;

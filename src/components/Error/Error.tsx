import { useCallback, useEffect } from 'react';
import { message } from 'antd';
import { useAppSelector } from '@/hooks/useAppSelector';

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

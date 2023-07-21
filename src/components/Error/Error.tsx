import { useCallback, useEffect } from 'react';
import { message } from 'antd';
import { useAppSelector } from '@/hooks/useAppSelector';

const Error = () => {
  const { error } = useAppSelector((state) => state.route);
  const [messageApi, contextHolder] = message.useMessage();

  const handleError = useCallback(() => {
    messageApi.error(error);
  }, [error, messageApi]);

  useEffect(() => {
    if (error) {
      handleError();
    }
  }, [error, handleError]);

  return contextHolder;
};

export default Error;

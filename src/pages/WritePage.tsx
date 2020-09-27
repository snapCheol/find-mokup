import React from 'react';
import { Redirect } from 'react-router-dom';
import WriteContainer from '../containers/write/WriteContainer';
import useGetUser from '../hooks/useGetUser';

const WritePage = () => {
  const user = useGetUser();
  if (user === null) return <Redirect to="/login" />;
  return <WriteContainer />;
};

export default WritePage;

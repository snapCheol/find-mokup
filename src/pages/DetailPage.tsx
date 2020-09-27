import React from 'react';
import { Redirect } from 'react-router-dom';
import DetailContainer from '../containers/detail/DetailContainer';
import useGetUser from '../hooks/useGetUser';

const DetailPage = () => {
  const user = useGetUser();
  if (user === null) return <Redirect to="/login" />;
  return <DetailContainer />;
};

export default DetailPage;

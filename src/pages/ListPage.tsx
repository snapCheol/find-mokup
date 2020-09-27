import React from 'react';
import { Redirect } from 'react-router-dom';

import SearchListContainer from '../containers/list/SearchListContainer';
import Search from '../containers/search/Search';
import useGetUser from '../hooks/useGetUser';

const ListPage = () => {
  const user = useGetUser();
  if (user === null) return <Redirect to="/login" />;
  return (
    <>
      <Search />
      <SearchListContainer />
    </>
  );
};

export default ListPage;

import React from 'react';

import SearchListContainer from '../containers/list/SearchListContainer';
import Search from '../containers/search/Search';

const ListPage = () => {
  return (
    <>
      <Search />
      <SearchListContainer />
    </>
  );
};

export default ListPage;

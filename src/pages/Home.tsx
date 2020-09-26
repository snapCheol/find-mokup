import React from 'react';
import PostListContainer from '../containers/list/PostListContainer';
import Search from '../containers/search/Search';

const Home = () => {
  return (
    <>
      <Search />
      <PostListContainer />
    </>
  );
};

export default Home;

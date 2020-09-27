import React from 'react';
import { Redirect } from 'react-router-dom';
import PostListContainer from '../containers/list/PostListContainer';
import Search from '../containers/search/Search';
import useGetUser from '../hooks/useGetUser';

const Home = () => {
  const user = useGetUser();
  if (user === null) return <Redirect to="/login" />;
  return (
    <>
      <Search />
      <PostListContainer />
    </>
  );
};

export default Home;

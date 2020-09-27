import React from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../components/list/PostList';
import { RootState } from '../../redux/reducers';

const SearchListContainer = () => {
  const { loading } = useSelector((state: RootState) => state.loading);
  const { searchList, error } = useSelector(
    (state: RootState) => state.postList
  );

  return <PostList postList={searchList} error={error} loading={loading} />;
};

export default SearchListContainer;

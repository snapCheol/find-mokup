import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/list/PostList';
import { RootState } from '../../reducers';
import { getPostList } from '../../actions/postList';

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { postList, error } = useSelector((state: RootState) => state.postList);

  useEffect(() => {
    dispatch(getPostList());
  }, [dispatch]);

  return <PostList postList={postList} error={error} />;
};

export default PostListContainer;

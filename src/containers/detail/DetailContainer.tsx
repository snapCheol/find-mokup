import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { readPost } from '../../actions/post';
import { setCurrentPost } from '../../actions/write';
import { deletePost } from '../../api/postApi';
import Detail from '../../components/detail/Detail';
import { RootState } from '../../reducers';

const DetailContainer = ({ match }: any) => {
  const history = useHistory();
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error } = useSelector((state: RootState) => state.post);
  const { loading } = useSelector((state: RootState) => state.loading);
  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const onRemove = useCallback(async () => {
    try {
      await deletePost(postId);
      console.log('삭제되었습니다.');
    } catch (error) {
      console.log(error);
    }
    history.push('/');
  }, [postId, history]);

  const goEdit = useCallback(() => {
    dispatch(setCurrentPost(post));
    history.push('/write');
  }, [post, history, dispatch]);

  useEffect(() => {
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  return (
    <Detail
      post={post}
      error={error}
      loading={loading}
      goBack={goBack}
      onRemove={onRemove}
      goEdit={goEdit}
    />
  );
};

export default withRouter(DetailContainer);

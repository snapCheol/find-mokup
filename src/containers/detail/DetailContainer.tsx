import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { readPost } from '../../actions/post';
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

  useEffect(() => {
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  return <Detail post={post} error={error} loading={loading} goBack={goBack} />;
};

export default withRouter(DetailContainer);

import { handleActions } from 'redux-actions';
import { POST_LIST_FAILURE, POST_LIST_SUCCESS } from '../actions/postList';

const initalState = {
  postList: null,
  error: null,
};

const postList = handleActions<any, any>(
  {
    [POST_LIST_SUCCESS]: (state, { payload: postList }) => ({
      ...state,
      postList,
    }),
    [POST_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initalState
);

export default postList;

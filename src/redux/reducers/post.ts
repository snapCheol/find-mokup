import { handleActions } from 'redux-actions';
import {
  READ_POST,
  READ_POST_FAILURE,
  READ_POST_SUCCESS,
  RESET_POST,
} from '../actions/post';

const initialState = {
  post: null,
  error: null,
};

const post = handleActions<any, any>(
  {
    [READ_POST]: (state) => ({
      ...state,
      post: null,
      error: null,
    }),
    [READ_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post: {
        ...post,
        id: post.id,
      },
    }),
    [READ_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),

    [RESET_POST]: () => initialState,
  },
  initialState
);

export default post;

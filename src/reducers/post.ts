import { handleActions } from 'redux-actions';
import { SAMPLE_POST } from '../actions/post';

const initialState = {
  post: {},
};

const post = handleActions(
  {
    [SAMPLE_POST]: (state) => state,
  },
  initialState
);

export default post;

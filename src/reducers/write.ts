import { handleActions } from 'redux-actions';
import {
  CHANGE_DATE,
  CHANGE_FIELD,
  CHANGE_FILE,
  CHANGE_SELECT,
  WRITE_POST,
  WRITE_POST_FAILURE,
  WRITE_POST_SUCCESS,
} from '../actions/write';
import { MokupResType } from '../types/write';

const initialState: MokupResType = {
  imgUrl: '',
  category: '',
  title: '',
  manager: '',
  date: '',
  year: '',
  month: '',
  post: null,
  postError: null,
};

const write = handleActions<MokupResType, any>(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [CHANGE_SELECT]: (state, { payload: { value } }) => ({
      ...state,
      category: value,
    }),
    [CHANGE_DATE]: (state, { payload: { value } }) => ({
      ...state,
      date: value,
      year: value.substring(0, 4),
      month: value.substring(5),
    }),
    [CHANGE_FILE]: (state, { payload: { value } }) => ({
      ...state,
      imgUrl: value,
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      postError: error,
    }),
  },
  initialState
);

export default write;

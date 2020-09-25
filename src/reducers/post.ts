import { handleActions } from 'redux-actions';
import {
  CHANGE_DATE,
  CHANGE_FIELD,
  CHANGE_FILE,
  CHANGE_SELECT,
} from '../actions/post';

const initialState = {
  imgUrl: '',
  category: '',
  manager: '',
  date: '',
  year: '',
  month: '',
};

const post = handleActions<any, any>(
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
    }),
    [CHANGE_FILE]: (state, { payload: { value } }) => ({
      ...state,
      imgUrl: value,
    }),
  },
  initialState
);

export default post;

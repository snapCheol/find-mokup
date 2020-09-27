import { AnyAction } from 'redux';
import { handleActions } from 'redux-actions';
import {
  POST_LIST_FAILURE,
  POST_LIST_SUCCESS,
  SELECT_SEARCH_FAILURE,
  SELECT_SEARCH_SUCCESS,
} from '../actions/postList';
import { CHANGE_SELECT } from '../actions/postList';

const initalState = {
  postList: null,
  error: null,
  year: '',
  category: '',
  searchList: null,
};

const postList = handleActions<any, AnyAction>(
  {
    [CHANGE_SELECT]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [POST_LIST_SUCCESS]: (state, { payload: postList }) => ({
      ...state,
      postList,
    }),
    [POST_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SELECT_SEARCH_SUCCESS]: (state, { payload: searchList }) => ({
      ...state,
      searchList,
    }),
    [SELECT_SEARCH_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initalState
);

export default postList;

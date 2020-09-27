import { createAction } from 'redux-actions';

export const POST_LIST = 'postList/POST_LIST';
export const POST_LIST_SUCCESS = 'postList/POST_LIST_SUCCESS';
export const POST_LIST_FAILURE = 'postList/POST_LIST_FAILURE';

export const CHANGE_SELECT = 'postList/CHANGE_SELECT';
export const SELECT_SEARCH = 'postList/SELECT_SEARCH';
export const SELECT_SEARCH_SUCCESS = 'postList/SELECT_SEARCH_SUCCESS';
export const SELECT_SEARCH_FAILURE = 'postList/SELECT_SEARCH_FAILURE';

export const getPostList = createAction(POST_LIST);
export const changeSelect = createAction(
  CHANGE_SELECT,
  ({ key, value }: any) => ({
    key,
    value,
  })
);

export const selectSearch = createAction(
  SELECT_SEARCH,
  (year: any, category: any) => ({
    year,
    category,
  })
);

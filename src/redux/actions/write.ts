import { createAction } from 'redux-actions';
import { ChangeFieldType, MokupReqType } from '../types/write';

export const CHANGE_FIELD = 'write/CHANGE_FIELD';
export const CHANGE_SELECT = 'write/CHANGE_SELECT';
export const CHANGE_DATE = 'write/CHANGE_DATE';
export const CHANGE_FILE = 'write/CHANGE_FILE';

export const WRITE_POST = 'write/WRITE_POST';
export const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
export const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE';

export const GET_DOWNLOAD_URL = 'write/GET_DOWNLOAD_URL';
export const GET_DOWNLOAD_URL_SUCCESS = 'write/GET_DOWNLOAD_URL_SUCCESS';
export const GET_DOWNLOAD_URL_FAILURE = 'write/GET_DOWNLOAD_URL_FAILURE';

export const SET_CURRENT_POST = 'write/SET_CURRENT_POST';

export const UPDATE_POST = 'write/UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'write/UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'write/UPDATE_POST_FAILURE';

export const FORM_INIT = 'write/FORM_INIT';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: ChangeFieldType) => ({
    key,
    value,
  })
);

export const changeSelect = createAction(CHANGE_SELECT, (value: any) => ({
  value,
}));

export const changeDate = createAction(CHANGE_DATE, (value: any) => ({
  value,
}));
export const changeFile = createAction(CHANGE_FILE, (value: any) => ({
  value,
}));
export const writePost = createAction(
  WRITE_POST,
  ({ imgUrl, title, category, manager, date, year, month }: MokupReqType) => ({
    imgUrl,
    title,
    category,
    manager,
    date,
    year,
    month,
  })
);
export const getDonwloadUrl = createAction(
  GET_DOWNLOAD_URL,
  (value: any) => value
);

export const setCurrentPost = createAction(
  SET_CURRENT_POST,
  (post: any) => post
);

export const updatePost = createAction(
  UPDATE_POST,
  (
    postId: string | null,
    { imgUrl, title, category, manager, date, year, month }: MokupReqType
  ) => ({
    imgUrl,
    title,
    category,
    manager,
    date,
    year,
    month,
  })
);

export const formInit = createAction(FORM_INIT);

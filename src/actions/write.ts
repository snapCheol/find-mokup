import { createAction } from 'redux-actions';
import { ChangeFieldType, MokupReqType } from '../types/write';

export const CHANGE_FIELD = 'write/CHANGE_FIELD' as const;
export const CHANGE_SELECT = 'write/CHANGE_SELECT' as const;
export const CHANGE_DATE = 'write/CHANGE_DATE' as const;
export const CHANGE_FILE = 'write/CHANGE_FILE' as const;

export const WRITE_POST = 'write/WRITE_POST' as const;
export const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS' as const;
export const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE' as const;

export const GET_DOWNLOAD_URL = 'write/GET_DOWNLOAD_URL';
export const GET_DOWNLOAD_URL_SUCCESS = 'write/GET_DOWNLOAD_URL_SUCCESS';
export const GET_DOWNLOAD_URL_FAILURE = 'write/GET_DOWNLOAD_URL_FAILURE';

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
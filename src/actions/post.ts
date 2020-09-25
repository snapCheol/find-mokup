import { createAction } from 'redux-actions';
import { ChangeFieldType } from '../types/post';

export const CHANGE_FIELD = 'CHANGE_FIELD' as const;
export const CHANGE_SELECT = 'CHANGE_SELECT' as const;
export const CHANGE_DATE = 'CHANGE_DATE' as const;
export const CHANGE_FILE = 'CHANGE_FILE' as const;

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

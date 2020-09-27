import { createAction } from 'redux-actions';
import { AuthType } from '../types/auth';
import { ChangeFieldType } from '../types/write';

export const CHANGE_FIELD = 'auth/CHANGE_FIELD';
export const LOGIN = 'auth/LOGIN';
export const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
export const LOGOUT = 'auth/LOGOUT';
export const FETCH_USER = 'auth/FETCH_USER';

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: ChangeFieldType) => ({
    key,
    value,
  })
);
export const login = createAction(LOGIN, ({ email, password }: AuthType) => ({
  email,
  password,
}));
export const logout = createAction(LOGOUT);
export const fetchUser = createAction(FETCH_USER, (user: any) => user);

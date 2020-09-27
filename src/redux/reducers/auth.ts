import { handleActions } from 'redux-actions';
import {
  CHANGE_FIELD,
  FETCH_USER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/auth';
import { AuthStateType } from '../types/auth';

const initialState: AuthStateType = {
  email: '',
  password: '',
  auth: false,
  authUser: null,
  authError: null,
};

const auth = handleActions<AuthStateType, any>(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [LOGIN_SUCCESS]: (state, { payload: authUser }) => ({
      ...state,
      auth: true,
      authUser: {
        id: authUser.user.uid,
        email: authUser.user.email,
      },
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      auth: false,
      authUser: null,
    }),
    [FETCH_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
  },
  initialState
);

export default auth;

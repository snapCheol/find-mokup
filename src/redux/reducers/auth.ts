import { handleActions } from 'redux-actions';
import {
  CHANGE_FIELD,
  FETCH_USER,
  LOGIN_CHECK,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/auth';
import { AuthStateType } from '../types/auth';

const initialState: AuthStateType = {
  email: '',
  password: '',
  user: null,
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
      authError: null,
    }),
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [FETCH_USER]: (state, { payload: user }) => ({
      ...state,
      user: {
        id: user.uid,
        email: user.email,
      },
    }),
    [LOGIN_CHECK]: (state) => ({ ...state }),
  },
  initialState
);

export default auth;

import { LOGIN, LOGOUT } from '../actions/auth';
import createRequestSaga from '../../lib/createRequestSaga';
import * as authAPI from '../../api/authApi';
import { call, takeLatest } from 'redux-saga/effects';

const loginSaga = createRequestSaga(LOGIN, authAPI.login);
function* logoutSaga() {
  try {
    localStorage.removeItem('auth');
    yield call(authAPI.logout);
  } catch (error) {
    console.log(error);
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

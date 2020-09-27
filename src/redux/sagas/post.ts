import * as postAPI from '../../api/postApi';
import { READ_POST } from '../actions/post';
import createRequestSaga from '../../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';

const readPostSaga = createRequestSaga(READ_POST, postAPI.readPost);
export function* postSaga() {
  yield takeLatest(READ_POST, readPostSaga);
}

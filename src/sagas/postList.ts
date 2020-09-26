import { POST_LIST } from '../actions/postList';
import createRequestSaga from '../lib/createRequestSaga';
import * as postAPI from '../api/postApi';
import { takeLatest } from 'redux-saga/effects';

const getPostListSaga = createRequestSaga(POST_LIST, postAPI.getListPost);
export function* postListSaga() {
  yield takeLatest(POST_LIST, getPostListSaga);
}

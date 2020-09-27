import { POST_LIST, SELECT_SEARCH } from '../actions/postList';
import createRequestSaga from '../../lib/createRequestSaga';
import * as postAPI from '../../api/postApi';
import { takeLatest } from 'redux-saga/effects';

const getPostListSaga = createRequestSaga(POST_LIST, postAPI.getListPost);
const selectSearchSaga = createRequestSaga(
  SELECT_SEARCH,
  postAPI.selectSearchListPost
);
export function* postListSaga() {
  yield takeLatest(POST_LIST, getPostListSaga);
  yield takeLatest(SELECT_SEARCH, selectSearchSaga);
}

import { GET_DOWNLOAD_URL, WRITE_POST } from '../actions/write';
import createRequestSaga from '../lib/createRequestSaga';
import * as postAPI from '../api/postApi';
import { takeLatest } from 'redux-saga/effects';

const writeWorkSaga = createRequestSaga(WRITE_POST, postAPI.writeWork);
const getDownloadUrlSaga = createRequestSaga(
  GET_DOWNLOAD_URL,
  postAPI.storageWork
);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writeWorkSaga);
  yield takeLatest(GET_DOWNLOAD_URL, getDownloadUrlSaga);
}

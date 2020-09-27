import { GET_DOWNLOAD_URL, UPDATE_POST, WRITE_POST } from '../actions/write';
import createRequestSaga from '../../lib/createRequestSaga';
import * as postAPI from '../../api/postApi';
import { takeLatest } from 'redux-saga/effects';

const writeWorkSaga = createRequestSaga(WRITE_POST, postAPI.writeWork);
const getDownloadUrlSaga = createRequestSaga(
  GET_DOWNLOAD_URL,
  postAPI.storageWork
);
const updateWorkSaga = createRequestSaga(UPDATE_POST, postAPI.updateWork);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writeWorkSaga);
  yield takeLatest(GET_DOWNLOAD_URL, getDownloadUrlSaga);
  yield takeLatest(UPDATE_POST, updateWorkSaga);
}

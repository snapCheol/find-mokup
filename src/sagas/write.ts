import { WRITE_POST } from '../actions/write';
import createRequestSaga from '../lib/createRequestSaga';
import * as writeAPI from '../api/writeApi';
import { takeLatest } from 'redux-saga/effects';

const writeWorkSaga = createRequestSaga(WRITE_POST, writeAPI.writeWork);

export function* writeSaga() {
  yield takeLatest(WRITE_POST, writeWorkSaga);
}

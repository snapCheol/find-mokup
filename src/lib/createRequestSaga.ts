import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from './loading';

export default function createRequestSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: AnyAction) {
    yield put(startLoading(type));
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true,
      });
    }

    yield put(finishLoading(type));
  };
}

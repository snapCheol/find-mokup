import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING' as const;
const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

export const startLoading = createAction(
  START_LOADING,
  (requestType: any) => requestType
);

export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType: any) => requestType
);

const initialState = {
  loading: false,
};

const loading = handleActions<any, any>(
  {
    [START_LOADING]: (state) => ({
      ...state,
      loading: true,
    }),
    [FINISH_LOADING]: (state) => ({
      ...state,
      loading: false,
    }),
  },
  initialState
);

export default loading;

import { combineReducers } from 'redux';
import loading from '../lib/loading';
import post from './post';
import write from './write';

const rootReducer = combineReducers({
  write,
  post,
  loading,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

import { combineReducers } from 'redux';
import postList from './postList';
import loading from '../lib/loading';
import post from './post';
import write from './write';

const rootReducer = combineReducers({
  write,
  post,
  loading,
  postList,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

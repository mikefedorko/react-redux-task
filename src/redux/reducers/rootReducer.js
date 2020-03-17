import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import newsReducer from './newsReducer';
import loaderReducer from './loaderReducer';
import errorReducer from './errorReducer';
import sessionReducer from './sessionReducer';

const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token', 'isAuthenticated', 'user'],
};

export default combineReducers({
  news: newsReducer,
  loader: loaderReducer,
  error: errorReducer,
  session: persistReducer(sessionPersistConfig, sessionReducer),
});

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

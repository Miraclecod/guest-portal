import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (devToolsExtension) {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const config = {
  key: 'root',
  storage,
  whitelist: ['passwordRecovery'],
}

const persistedReducer = persistReducer(config, rootReducer(history));

const store = createStore(persistedReducer, initialState, composedEnhancers);

export const persistor = persistStore(store);

export default store;

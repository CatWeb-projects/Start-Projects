import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import appReducer from './appReducer';
import appSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
middlewares.push(logger);

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(appSaga);

export default store;

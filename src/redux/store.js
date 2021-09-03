import { applyMiddleware } from 'redux';
import { createStore } from 'redux';
import logger from 'redux-logger';
import persistStore from 'redux-persist/es/persistStore';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './root.reducers';
import rootSaga from './root.sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

middlewares.push(logger);

export const store = createStore(rootReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistStore };
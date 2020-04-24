import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducers from './product/productReducers';
import rootSaga from './rootSaga';

const allReducers = combineReducers({
  productReducers
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
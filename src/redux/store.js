import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import productReducers from './product/productReducers';
import userReducers from './user/userReducers';
import loginReducers from './auth/loginReducers';

const allReducers = combineReducers({
  productReducers,
  userReducers,

  loginReducers
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
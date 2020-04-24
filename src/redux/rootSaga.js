import { all } from 'redux-saga/effects';
import { fetchProductsWatcher, deleteProductWatcher, editProductWatcher } from './product/productSagas';

function* rootSaga() {
  yield all([
    fetchProductsWatcher(),
    deleteProductWatcher(),
    editProductWatcher()
  ]);
};

export default rootSaga;
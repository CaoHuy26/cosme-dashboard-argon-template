import { all } from 'redux-saga/effects';
import { fetchProductsWatcher, deleteProductWatcher, editProductWatcher } from './product/productSagas';
import { fetchUsersWatcher } from './user/userSagas';

function* rootSaga() {
  yield all([
    fetchProductsWatcher(),
    deleteProductWatcher(),
    editProductWatcher(),

    fetchUsersWatcher()
  ]);
};

export default rootSaga;
import { all } from 'redux-saga/effects';
import { fetchProductsWatcher, deleteProductWatcher, editProductWatcher } from './product/productSagas';
import { fetchUsersWatcher, banUserWatcher, unbanUserWatcher, deleteUserWatcher } from './user/userSagas';

function* rootSaga() {
  yield all([
    fetchProductsWatcher(),
    deleteProductWatcher(),
    editProductWatcher(),

    fetchUsersWatcher(),
    banUserWatcher(),
    unbanUserWatcher(),
    deleteUserWatcher()
  ]);
};

export default rootSaga;
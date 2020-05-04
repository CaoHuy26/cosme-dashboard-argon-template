import { all } from 'redux-saga/effects';
import { fetchProductsWatcher, deleteProductWatcher, editProductWatcher } from './product/productSagas';
import { fetchUsersWatcher, banUserWatcher, unbanUserWatcher, deleteUserWatcher } from './user/userSagas';
import { loginWatcher } from './auth/authSagas';

function* rootSaga() {
  yield all([
    fetchProductsWatcher(),
    deleteProductWatcher(),
    editProductWatcher(),

    fetchUsersWatcher(),
    banUserWatcher(),
    unbanUserWatcher(),
    deleteUserWatcher(),

    loginWatcher()
  ]);
};

export default rootSaga;
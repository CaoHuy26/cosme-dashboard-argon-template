import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import userActionTypes from './userTypes';

function* fetchUsers() {
  try {
    const res = yield axios.get('http://localhost:3000/u/users');
    const { statusCode, users } = res.data;
    if (statusCode === 200) {
      yield put({
        type: userActionTypes.FETCH_USERS_SUCCESS,
        users
      });
    }
    else {
      yield put({
        type: userActionTypes.FETCH_USERS_FAILURE,
        erorr: res.data.msg
      })
    }
  }
  catch (error) {
    yield put({
      type: userActionTypes.FETCH_USERS_FAILURE,
      error
    });
  }
}

function* fetchUsersWatcher() {
  yield takeEvery(userActionTypes.FETCH_USERS_REQUEST, fetchUsers);
}

export {
  fetchUsersWatcher
};
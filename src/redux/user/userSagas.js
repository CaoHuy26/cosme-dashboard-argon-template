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

function* banUser(action) {
  try {
    const { userId } = action;
    const res = yield axios.put(`http://localhost:3000/u/ban/${userId}`);
    const { statusCode } = res.data;
    if (statusCode === 200) {
      yield put({
        type: userActionTypes.BAN_USER_SUCCESS,
        userId
      });
    }
    else {
      yield put({
        type: userActionTypes.BAN_USER_FAILURE,
        erorr: res.data.msg
      })
    }
  }
  catch (error) {
    yield put({
      type: userActionTypes.BAN_USER_FAILURE,
      error
    });
  }
}

function* banUserWatcher() {
  yield takeEvery(userActionTypes.BAN_USER_REQUEST, banUser);
}

function* unbanUser(action) {
  try {
    const { userId } = action;
    const res = yield axios.put(`http://localhost:3000/u/unban/${userId}`);
    const { statusCode } = res.data;
    if (statusCode === 200) {
      yield put({
        type: userActionTypes.UNBAN_USER_SUCCESS,
        userId
      });
    }
    else {
      yield put({
        type: userActionTypes.UNBAN_USER_FAILURE,
        erorr: res.data.msg
      })
    }
  }
  catch (error) {
    yield put({
      type: userActionTypes.UNBAN_USER_FAILURE,
      error
    });
  }
}

function* unbanUserWatcher() {
  yield takeEvery(userActionTypes.UNBAN_USER_REQUEST, unbanUser);
}

function* deleteUser(action) {
  try {
    const { userId } = action;
    const res = yield axios.delete(`http://localhost:3000/u/${userId}`);
    const { statusCode } = res.data;
    if (statusCode === 200) {
      yield put({
        type: userActionTypes.DELETE_USER_SUCCESS,
        userId
      });
    }
    else {
      yield put({
        type: userActionTypes.DELETE_USER_FAILURE,
        erorr: res.data.msg
      })
    }
  }
  catch (error) {
    yield put({
      type: userActionTypes.DELETE_USER_FAILURE,
      error
    });
  }
}

function* deleteUserWatcher() {
  yield takeEvery(userActionTypes.DELETE_USER_REQUEST, deleteUser);
}

export {
  fetchUsersWatcher,
  banUserWatcher,
  unbanUserWatcher,
  deleteUserWatcher
};
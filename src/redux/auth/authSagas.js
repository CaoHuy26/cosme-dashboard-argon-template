import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import authActionTypes from './authActionTypes';

function* login(action) {
  try {
    const user = {
      email: action.user.email,
      password: action.user.password
    };
    const res = yield axios.post('http://localhost:3000/auth/login', user);

    if (res.data.statusCode === 200) {
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
      yield put({
        type: authActionTypes.LOGIN_SUCCESS,
        token,
        user
      })
    }
    else {
      yield put({
        type: authActionTypes.LOGIN_FAILURE,
        error: res.data.msg
      })
    }
  }
  catch (error) {
    yield put({
      type: authActionTypes.USER_LOGIN_FAILURE,
      error
    })
  }
}

function* loginWatcher() {
  yield takeEvery(authActionTypes.LOGIN_REQUEST, login);
}

export {
  loginWatcher
}
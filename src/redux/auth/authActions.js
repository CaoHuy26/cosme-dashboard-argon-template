import authActionTypes from './authActionTypes';

const authActions = {
  login: user => {
    return {
      type: authActionTypes.LOGIN_REQUEST,
      user
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return {
      type: authActionTypes.LOGOUT
    }
  }
};

export default authActions;
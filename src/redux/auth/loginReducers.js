import authActionTypes from './authActionTypes';

const initialState = {
  isLoading: false,
  isLoggedIn: localStorage.token ? true : false,
  success: false,
  user: localStorage.user || null,
  token: localStorage.token || null,
  error: null
}

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        success: true,
        user: action.user,
        token: action.token,
        error: null
      }
    case authActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        success: false,
        user: null,
        token: null,
        error: action.msg
      }

    case authActionTypes.LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        success: true,
        user: null,
        token: null,
        error: null
      }
    
    default:
      return state
  }
};

export default loginReducers;
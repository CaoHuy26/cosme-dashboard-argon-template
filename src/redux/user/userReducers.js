import userActionTypes from "./userTypes";

const initialState = {
  isLoading: false,
  success: false,
  users: [],
  erorr: null
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case userActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        users: action.users,
        error: null
      }
    case userActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        users: [],
        erorr: action.error
      }

    default:
      return state
  }
};

export default userReducers;
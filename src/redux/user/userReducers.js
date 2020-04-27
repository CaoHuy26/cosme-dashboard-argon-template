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

    case userActionTypes.BAN_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        success: false,
        erorr: null
      }
    case userActionTypes.BAN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: false,
        users: state.users.map(
          user => user.id === action.userId
            ? {...user, active: 0}
            : user
        ),
        erorr: null
      }
    case userActionTypes.BAN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        users: [],
        erorr: action.error
      }

    case userActionTypes.UNBAN_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        success: false,
        erorr: null
      }
    case userActionTypes.UNBAN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: false,
        users: state.users.map(
          user => user.id === action.userId
            ? {...user, active: 1}
            : user
        ),
        erorr: null
      }
    case userActionTypes.UNBAN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        success: false,
        users: [],
        erorr: action.error
      }

    case userActionTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        success: false,
        erorr: null
      }
    case userActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: false,
        users: state.users.filter(
          user => user.id !== action.userId
        ),
        erorr: null
      }
    case userActionTypes.DELETE_USER_FAILURE:
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
import userActionTypes from './userTypes';

const userActions = {
  fetchUsers: () => {
    return {
      type: userActionTypes.FETCH_USERS_REQUEST
    }
  },
  banUser: (userId) => {
    return {
      type: userActionTypes.BAN_USER_REQUEST,
      userId
    }
  },
  unbanUser: (userId) => {
    return {
      type: userActionTypes.UNBAN_USER_REQUEST,
      userId
    }
  },
  deleteUser: (userId) => {
    return {
      type: userActionTypes.DELETE_USER_REQUEST,
      userId
    }
  }
};

export default userActions;
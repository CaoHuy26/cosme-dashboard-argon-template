import userActionTypes from './userTypes';

const userActions = {
  fetchUsers: () => {
    return {
      type: userActionTypes.FETCH_USERS_REQUEST
    }
  }
};

export default userActions;
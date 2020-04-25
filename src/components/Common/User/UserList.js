import React, { useEffect } from 'react';
import { LinearProgress } from '@material-ui/core';
import { CardBody, Row } from "reactstrap";
import { useDispatch, useSelector } from 'react-redux';
import UserListItem from './UserListItem';
import userActions from 'redux/user/userActions';

function UserList() {

  const userReducers = useSelector(state => state.userReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.fetchUsers());
  }, []);

  return (
    <>
      {
        userReducers.isLoading
          ? <LinearProgress variant="query" />
          : (
            <CardBody>
              <Row className=" icon-examples">
                {
                  userReducers.users.map(user => (
                    <UserListItem 
                      key={user.id}
                      user={user}
                    />
                  ))
                }
              </Row>
            </CardBody>
          )
      }
    </>
  );
}

export default UserList;
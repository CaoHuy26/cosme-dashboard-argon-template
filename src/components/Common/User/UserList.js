import React from 'react';
import { CardBody, Row } from "reactstrap";
import UserListItem from './UserListItem';

const users = [
  {
    id: '1',
    avatar: '',
    name: 'ewe',
    date: '22/2/2222'
  },
  {
    id: '2',
    avatar: '',
    name: 'ưewewe'
  },
  {
    id: '3',
    avatar: '',
    name: '545we'
  },
  {
    id: '4',
    avatar: '',
    name: 'ftedaáwe'
  },
  {
    id: '5',
    avatar: '',
    name: 'rẻtrewe'
  }
]

function UserList() {
  return (
    <CardBody>
      <Row className=" icon-examples">
        {
          users.map(user => (
            <UserListItem 
              key={user.id}
              user={user}
            />
          ))
        }
      </Row>
    </CardBody>
  );
}

export default UserList;
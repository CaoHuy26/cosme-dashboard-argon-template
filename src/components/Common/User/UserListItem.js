import React from 'react';
import { Col, UncontrolledTooltip } from 'reactstrap';
import UserActions from './UserActions';

function UserListItem(props) {
  const { user } = props;

  return (
    <Col lg="3" md="6">
      <button
        className="btn-icon-clipboard"
        id={"user-" + user.id}
        type="button"
        style={{backgroundColor: !user.active ? "#fff0f6" : null}}
      >
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div>
            <i className="ni ni-circle-08" />
            <span style={{textDecoration: !user.active ? "line-through" : null}}>
              {user.email}
            </span>
          </div>

          <UserActions user={user}/>
          
        </div>
      </button>
      
      <UncontrolledTooltip
        delay={0}
        trigger="hover focus"
        target={"user-" + user.id}
      >
        Email: {user.email}
        {<br/>}
        {user.createdAt}
      </UncontrolledTooltip>
    </Col>
  );
}

export default UserListItem;
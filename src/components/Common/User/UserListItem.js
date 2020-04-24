import React from 'react';
import { Col, UncontrolledTooltip } from 'reactstrap';

function UserListItem(props) {
  const { user } = props;

  return (
    <Col lg="3" md="6">
      <button
        className="btn-icon-clipboard"
        id={"user-" + user.id}
        type="button"
      >
        <div>
          <i className="ni ni-circle-08" />
          <span>{user.name}</span>
          {/* <span>Ngày tạo: {user.date}</span> */}
        </div>
      </button>
      
      <UncontrolledTooltip
        delay={0}
        trigger="hover focus"
        target={"user-" + user.id}
      >
        {user.date}
      </UncontrolledTooltip>
    </Col>
  );
}

export default UserListItem;
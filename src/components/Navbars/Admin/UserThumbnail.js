import React from 'react';
import { Nav, UncontrolledDropdown, DropdownToggle, Media, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import authActions from 'redux/auth/authActions';

function UserThumbnail() {
  const loginReducers = useSelector(state => state.loginReducers);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  }

  return (
    <Nav className="align-items-center d-none d-md-flex" navbar>
      <UncontrolledDropdown nav>
        <DropdownToggle className="pr-0" nav>
          <Media className="align-items-center">
            <span className="avatar avatar-sm rounded-circle">
              <img
                alt="..."
                src={require("assets/img/brand/favicon.png")}
              />
            </span>
            <Media className="ml-2 d-none d-lg-block">
              <span className="mb-0 text-sm font-weight-bold">
                { loginReducers.user.email }
              </span>
            </Media>
          </Media>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-arrow" right>
          <DropdownItem className="noti-title" header tag="div">
            <h6 className="text-overflow m-0">Welcome!</h6>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-single-02" />
            <span>My profile</span>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-settings-gear-65" />
            <span>Settings</span>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-calendar-grid-58" />
            <span>Activity</span>
          </DropdownItem>
          <DropdownItem to="/admin/user-profile" tag={Link}>
            <i className="ni ni-support-16" />
            <span>Support</span>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => handleLogout()}>
            <i className="ni ni-user-run" />
            <span>Đăng xuất</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
}

export default UserThumbnail;
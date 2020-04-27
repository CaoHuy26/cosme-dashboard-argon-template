import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import userActions from 'redux/user/userActions';
import ComfirmationDialog from '../Common/ComfirmationDialog';

function UserActions(props) {
  const { user } = props;
  const dispatch = useDispatch();

  const [openBanUserDialog, setOpenBanUserDialog] = useState(false);
  const [openUnbanUserDialog, setOpenUnbanUserDialog] = useState(false);
  const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState(false);

  const viewUserProfile = (userId) => {
    alert('View User profile' + userId);
  }

  const banUser = (userId) => {
    dispatch(userActions.banUser(userId));
    setOpenBanUserDialog(false);
  }

  const unbanUser = (userId) => {
    dispatch(userActions.unbanUser(userId));
    setOpenUnbanUserDialog(false);
  }

  const deleteUser = (userId) => {
    dispatch(userActions.deleteUser(userId));
    setOpenDeleteUserDialog(false);
  }

  return (
    <UncontrolledDropdown>
      <DropdownToggle
        className="btn-icon-only text-light"
        href="#pablo"
        role="button"
        size="sm"
        color=""
        onClick={e => e.preventDefault()}
      >
        <i className="fas fa-ellipsis-v" />
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-arrow" right>
        <DropdownItem
          href="#pablo"
          onClick={() => viewUserProfile(user.id)}
        >
          Xem thông tin khách hàng
        </DropdownItem>

        {
          user.active
            ? (
              <DropdownItem
                href="#pablo"
                onClick={() => setOpenBanUserDialog(true)}
              >
                Khóa tài khoản
              </DropdownItem>
            )
            : (
              <DropdownItem
                href="#pablo"
                onClick={() => setOpenUnbanUserDialog(true)}
              >
                Mở khóa tài khoản
              </DropdownItem>
            )
        }
        <DropdownItem
          href="#pablo"
          onClick={() => setOpenDeleteUserDialog(true)}
          style={{color: "red"}}
        >
          Xóa tài khoản
        </DropdownItem>

        {
          openBanUserDialog && (
            <ComfirmationDialog 
              isOpen={openBanUserDialog}
              message={`Xóa nhận khóa tài khoản ${user.email}`}
              onCloseDialog={() => setOpenBanUserDialog(false)}
              action={() => banUser(user.id)}
            />
          )
        }

        {
          openUnbanUserDialog && (
            <ComfirmationDialog 
              isOpen={openUnbanUserDialog}
              message={`Mở khóa tài khoản ${user.email}`}
              onCloseDialog={() => setOpenUnbanUserDialog(false)}
              action={() => unbanUser(user.id)}
            />
          )
        }

        {
          openDeleteUserDialog && (
            <ComfirmationDialog 
              isOpen={openDeleteUserDialog}
              message={`Xóa nhận xóa tài khoản ${user.email}`}
              onCloseDialog={() => setOpenDeleteUserDialog(false)}
              action={() => deleteUser(user.id)}
            />
          )
        }

      </DropdownMenu>
    </UncontrolledDropdown>
  );
}

export default UserActions;
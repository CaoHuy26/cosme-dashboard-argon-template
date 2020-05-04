import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Button } from "reactstrap";
import UserThumbnail from "./Admin/UserThumbnail";
import FormSearch from "./Admin/FormSearch";
import { useSelector } from "react-redux";

function AdminNavbar(props) {
  
  const loginReducers = useSelector(state => state.loginReducers);
  const history = useHistory();

  const redirectToLoginPage = () => {
    history.push('/auth/login');
  }

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            {props.brandText}
          </Link>

          <FormSearch />
          
          {
            loginReducers.token
            ? <UserThumbnail />
            : <Button
                onClick={() => redirectToLoginPage()}
              >
                Đăng nhập
              </Button>
          }

        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;

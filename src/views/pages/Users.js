import React from "react";
import {
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import UserList from "components/Common/User/UserList";

class Icons extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Danh sách khách hàng</h3>
                </CardHeader>
                
                <UserList />

              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default Icons;

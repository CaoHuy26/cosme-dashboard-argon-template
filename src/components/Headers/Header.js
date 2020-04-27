import React from "react";
import { Container, Row } from "reactstrap";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <HeaderItem
                title="Doanh thu"
                dataNumber="350,897"
                percentGrowth="3.48%"
                shapeIcon="fas fa-chart-bar"
                percentIcon="fa fa-arrow-down"
              />

              <HeaderItem
                title="Khách hàng"
                dataNumber="2,356"
                percentGrowth="3.48%"
                shapeIcon="fas fa-users"
                percentIcon="fa fa-arrow-up"
              />

              <HeaderItem
                title="Sản phẩm đã bán"
                dataNumber="924"
                percentGrowth="1.10%"
                shapeIcon="fas fa-chart-pie"
                percentIcon="fa fa-arrow-down"
              />

              <HeaderItem
                title="Tăng trưởng"
                dataNumber="49,65%"
                percentGrowth="12%"
                shapeIcon="fas fa-percent"
                percentIcon="fa fa-arrow-up"
              />
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Header;

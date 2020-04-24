import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Container,
  Row,
} from "reactstrap";

import Header from "components/Headers/Header.js";
import ProductTable from "components/Common/Product/ProductTable";
import PaginationCustom from "components/Common/PaginationCustom";

function Tables() {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              {/*  */}
              <CardHeader className="border-0">
                <h3 className="mb-0">Sản phẩm</h3>
              </CardHeader>

              {/*  */}
              <ProductTable />

              {/* PAGINATION */}
              {/* <CardFooter className="py-4">
                <nav aria-label="...">
                  <PaginationCustom />
                </nav>
              </CardFooter> */}

            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Tables;

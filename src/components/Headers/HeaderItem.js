import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

function HeaderItem(props) {
  return (
    <Col lg="6" xl="3">
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle
                tag="h5"
                className="text-uppercase text-muted mb-0"
              >
                {props.title}
              </CardTitle>
              <span className="h2 font-weight-bold mb-0">
                {props.dataNumber}
              </span>
            </div>
            <Col className="col-auto">
              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                <i className={props.shapeIcon} />
              </div>
            </Col>
          </Row>
          <p className="mt-3 mb-0 text-muted text-sm">
            <span className="text-success mr-2">
              <i className={props.percentIcon} /> {props.percentGrowth}
            </span>{" "}
            <span className="text-nowrap">Tháng trước</span>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
}

export default HeaderItem;
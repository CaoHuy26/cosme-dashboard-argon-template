import React from 'react';
import { Table, Progress } from 'reactstrap';

function RankProduct() {
  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Số lượt mua</th>
          <th scope="col">Tình trạng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Facebook</th>
          <td>1,480</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">60%</span>
              <div>
                <Progress
                  max="100"
                  value="60"
                  barClassName="bg-gradient-danger"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Facebook</th>
          <td>5,480</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">70%</span>
              <div>
                <Progress
                  max="100"
                  value="70"
                  barClassName="bg-gradient-success"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Google</th>
          <td>4,807</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">80%</span>
              <div>
                <Progress max="100" value="80" />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">Instagram</th>
          <td>3,678</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">75%</span>
              <div>
                <Progress
                  max="100"
                  value="75"
                  barClassName="bg-gradient-info"
                />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">twitter</th>
          <td>2,645</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">30%</span>
              <div>
                <Progress
                  max="100"
                  value="30"
                  barClassName="bg-gradient-warning"
                />
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default RankProduct;
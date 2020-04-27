import React from 'react';
import { Table } from 'reactstrap';

function NewOrder() {
  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col">Tên sản phẩm</th>
          <th scope="col">Người mua</th>
          <th scope="col">Số lượng</th>
          <th scope="col">Tổng tiền</th>
          <th scope="col">Tình trạng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">/argon/</th>
          <td>4,569</td>
          <td>340</td>
          <td>
            <i className="fas fa-arrow-up text-success mr-3" />{" "}
            46,53%
          </td>
          <td>Done</td>
        </tr>
        <tr>
          <th scope="row">/argon/index.html</th>
          <td>3,985</td>
          <td>319</td>
          <td>
            <i className="fas fa-arrow-down text-warning mr-3" />{" "}
            46,53%
          </td>
          <td>Done</td>
        </tr>
        <tr>
          <th scope="row">/argon/charts.html</th>
          <td>3,513</td>
          <td>294</td>
          <td>
            <i className="fas fa-arrow-down text-warning mr-3" />{" "}
            36,49%
          </td>
          <td>Done</td>
        </tr>
        <tr>
          <th scope="row">/argon/tables.html</th>
          <td>2,050</td>
          <td>147</td>
          <td>
            <i className="fas fa-arrow-up text-success mr-3" />{" "}
            50,87%
          </td>
          <td>Done</td>
        </tr>
        <tr>
          <th scope="row">/argon/profile.html</th>
          <td>1,795</td>
          <td>190</td>
          <td>
            <i className="fas fa-arrow-down text-danger mr-3" />{" "}
            46,53%
          </td>
          <td>Done</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default NewOrder;
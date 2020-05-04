import React from 'react';
import { Table } from 'reactstrap';
import NewOrderItem from './NewOrderItem';

const fakeDate = [
  {
    orderId: '#12121',
    customer: 'rêrerer',
    date: '20/01/2020',
    total: 3232323,
    status: 'Done'
  }
]

function NewOrder() {
  return (
    <Table className="align-items-center table-flush" responsive>
      <thead className="thead-light">
        <tr>
          <th scope="col">Mã đơn hàng</th>
          <th scope="col">Người đặt</th>
          <th scope="col">Ngày đặt</th>
          <th scope="col">Tổng tiền</th>
          <th scope="col">Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        {
          fakeDate.map(order => (
            <NewOrderItem order={order} />
          ))
        }
      </tbody>
    </Table>
  );
}

export default NewOrder;
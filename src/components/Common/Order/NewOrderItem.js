import React from 'react';
import { Badge } from 'reactstrap';

function NewOrderItem(props) {
  const { order } = props;
  
  return (
    <tr>
      <th scope="row">{order.orderId}</th>
      <td>{order.customer}</td>
      <td>{order.date}</td>
      <td>{order.total}</td>
      <td>
        {
          order.status === 'Done' 
            ? <Badge color="success">Success</Badge>
            : <Badge color="danger">Fail</Badge>
        }
      </td>
    </tr>
  );
}

export default NewOrderItem;
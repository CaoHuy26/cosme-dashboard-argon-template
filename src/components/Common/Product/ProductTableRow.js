import React, { useState } from 'react';
import {
  Media,
  Badge,
  UncontrolledTooltip,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import DialogComfirmDeleteProduct from './ProductForm/DialogComfirmDeleteProduct';
import DialogEditProduct from './ProductForm/DialogEditProduct';

function ProductTableRow(props) {
  const { product } = props;

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  // Delete product
  const onOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const onCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  // Edit product
  const onOpenEditDialog = () => {
    setOpenEditDialog(true);
  };

  const onCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  return (
  <tr>
    <th scope="row">
      <Media className="align-items-center">
        <a
          className="avatar rounded-circle mr-3"
          href="#pablo"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            src={require("assets/img/theme/vue.jpg")}
          />
        </a>
        <Media>
          <span className="mb-0 text-sm">
            {product.name}
          </span>
        </Media>
      </Media>
    </th>
    <td>{product.price}</td>
    <td>
      <Badge color="" className="badge-dot mr-4">
        <i className="bg-success" />
          {
            product.active ? 'Còn hàng' : 'Hết hàng'
          }
      </Badge>
    </td>
    <td>
      <div className="avatar-group">
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip664029969"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={require("assets/img/theme/team-1-800x800.jpg")}
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip664029969"
        >
          Ryan Tompson
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip806693074"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={require("assets/img/theme/team-2-800x800.jpg")}
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip806693074"
        >
          Romina Hadid
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip844096937"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={require("assets/img/theme/team-3-800x800.jpg")}
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip844096937"
        >
          Alexander Smith
        </UncontrolledTooltip>
        <a
          className="avatar avatar-sm"
          href="#pablo"
          id="tooltip757459971"
          onClick={e => e.preventDefault()}
        >
          <img
            alt="..."
            className="rounded-circle"
            src={require("assets/img/theme/team-4-800x800.jpg")}
          />
        </a>
        <UncontrolledTooltip
          delay={0}
          target="tooltip757459971"
        >
          Jessica Doe
        </UncontrolledTooltip>
      </div>
    </td>
    <td>
      <div className="d-flex align-items-center">
        <span className="mf-2">
          {product.stock}
        </span>
      </div>
    </td>
    
    <td className="text-right">
      <Button color="info" onClick={() => onOpenEditDialog()}>
        Chỉnh sửa
      </Button>
      <Button color="danger" onClick={() => onOpenDeleteDialog()}>
        Xóa
      </Button>

      { 
        openDeleteDialog && (
          <DialogComfirmDeleteProduct
            product={product}
            isOpen={openDeleteDialog}
            onCloseDialog={onCloseDeleteDialog}
          />
        )
      }

      {
        openEditDialog && (
          <DialogEditProduct
          product={product}
          isOpen={openEditDialog}
          onCloseDialog={onCloseEditDialog}
          />
        )
      }
      
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
            onClick={e => e.preventDefault()}
          >
            Action
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </td>

  </tr>
  );
}

export default ProductTableRow;
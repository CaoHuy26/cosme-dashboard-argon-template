import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import productActions from '../../../../redux/product/productActions';

function DialogEditProduct(props) {
  const { product, isOpen } = props;

  const [newProduct, setNewProduct] = useState({
    name: product.name,
    price: product.price
  });
  const dispatch = useDispatch();

  const handleChange= e => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value 
    });
  };

  const onEditProduct = productId => {
    dispatch(productActions.editProduct(productId, newProduct));
  };
  
  return (
    <Dialog
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Thông báo</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Chỉnh sửa sản phẩm: {product.id}
        </DialogContentText>
        <TextField
          autoFocus
          id="name"
          name="name"
          type="text"
          margin="dense"
          label="Tên sản phẩm"
          fullWidth
          value={newProduct.name}
          onChange={handleChange}
        />
        <TextField
          id="price"
          name="price"
          type="text"
          margin="dense"
          label="Giá"
          fullWidth
          value={newProduct.price}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => props.onCloseDialog()}>
          Huỷ
        </Button>
        <Button color="primary" autoFocus onClick={() => onEditProduct(product.id)}>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogEditProduct;

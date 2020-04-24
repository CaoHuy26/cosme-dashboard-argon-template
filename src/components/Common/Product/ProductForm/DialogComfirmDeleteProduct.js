import React from 'react';
import { Button } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import productActions from '../../../../redux/product/productActions';

function DialogComfirmDelete(props) {
  const { product, isOpen } = props;

  const dispatch = useDispatch();

  const onDeleteProduct = productId => {
    dispatch(productActions.deleteProduct(productId));
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
          Xác nhận xóa sản phẩm: {product.id}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => props.onCloseDialog()}>
          Huỷ
        </Button>
        <Button color="primary" autoFocus onClick={() => onDeleteProduct(product.id)}>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogComfirmDelete;

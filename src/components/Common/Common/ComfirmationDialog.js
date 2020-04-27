import React from 'react';
import { Button } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

function ComfirmationDialog(props) {

  return (
    <Dialog
      open={props.isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Thông báo</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={() => props.onCloseDialog()}>
          Huỷ
        </Button>
        <Button color="primary" autoFocus onClick={props.action}>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ComfirmationDialog;
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DialogBox(props) {
  const {
    showDialog = false,
    onClose = () => {},
    title = "",
    maxWidth="",
    children,
  } = props;

  const handleClose = (event) => {
    onClose(event);
  };

  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={maxWidth}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle id="draggable-dialog-title">{title}</DialogTitle>
        {children}
      </Dialog>
    </div>
  );
}

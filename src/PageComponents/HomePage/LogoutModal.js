import React, { Component } from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';


  export const LogoutModal = ({ sessionID, setloginStatus, setcurrentPage, setOpenLogoutModal, openLogoutModel}) => {
  
    console.log(openLogoutModel);
  
    const handleEntering = () => {
    
    };
  
    const handleCancel = () => {
      setOpenLogoutModal(false);
    };
  
    const handleOk = () => {
      setloginStatus("signedOut");  
      setcurrentPage("Login");
    };
  
  
    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        TransitionProps={{ onEntering: handleEntering }}
        open={openLogoutModel}
      
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
            If you wish logout of the current account and return to the login page, click "OK". Otherwise, click "Cancel".
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant='outlined' color = "primary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant='outlined' color = "error" onClick={handleOk}>OK</Button>
        </DialogActions>
      </Dialog>
    );
  }



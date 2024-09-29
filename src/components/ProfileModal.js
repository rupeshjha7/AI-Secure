import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, Grow } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Grow ref={ref} {...props} />;
});

const ProfileModal = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="profile-dialog-title"
      aria-describedby="profile-dialog-description"
    >
      <DialogTitle id="profile-dialog-title">
        Profile Information
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          Here you can view and edit your profile information.
        </Typography>
        {/* You can add more content like forms or detailed information here */}
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;

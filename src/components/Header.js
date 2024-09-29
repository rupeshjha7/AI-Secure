import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Menu, MenuItem, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ProfileModal from './ProfileModal'; // Import the ProfileModal component

const Header = ({ handleDrawerToggle }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    handleMenuClose();
    setProfileModalOpen(true); // Open the profile modal
  };

  const handleProfileModalClose = () => {
    setProfileModalOpen(false); // Close the profile modal
  };

  return (
    <>
      <AppBar  sx={{ zIndex: 1201 }}>
        <Toolbar>
          {/* Hamburger menu for mobile */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }} // Only show on small screens
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          AI Secure
          </Typography>
          {/* <Typography variant="h4"  noWrap sx={{ flexGrow: 1 }}>
          AI Secure
        </Typography> */}
          {/* Profile section */}
          <Box>
            <IconButton onClick={handleMenuClick}>
              <Avatar alt="Rupesh" src="/static/images/avatar/1.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem> {/* Profile Menu Item */}
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Profile Modal */}
      <ProfileModal open={profileModalOpen} handleClose={handleProfileModalClose} />
    </>
  );
};

export default Header;

// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';

function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawer = (
    <div>
      <List>
      
        <ListItem button component={Link} to="/">
          {/* <ListItemText primary="Home" /> */}
        </ListItem>
      <ListItem button component={Link} to="/">
          {/* <ListItemText primary="Home" /> */}
        </ListItem>
        <ListItem button component={Link} to="/">
          {/* <ListItemText primary="Home" /> */}
        </ListItem>
      <ListItem button component={Link} to="/">
          {/* <ListItemText primary="Home" /> */}
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        {/* <ListItem button component={Link} to="/analytics">
          <ListItemText primary="Analytics" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem> */}
        {/* <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/signup">
          <ListItemText primary="Signup" />
        </ListItem> */}
      </List>
    </div>
  );

  return (
    <>
      {/* Temporary Drawer for Mobile */}
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      ) : (
        // Permanent Drawer for Desktop
        <Drawer
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
          }}
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;

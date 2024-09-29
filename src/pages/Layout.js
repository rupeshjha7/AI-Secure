import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from '../components/Sidebar';  // Sidebar component
import Header from '../components/Header';    // Header component



const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          {children} {/* Main content goes here */}
        </Box>
      </Box>

      {/* Chat Input at the Bottom */}
      {/* Always fixed at the bottom */}
    </Box>
  );
};

export default Layout;

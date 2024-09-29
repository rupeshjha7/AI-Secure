import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Login from './pages/Signin';
import Signup from './pages/Signup';
import { Box, Toolbar } from '@mui/material';
// import './App.css';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // Toggle the mobile sidebar
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Header */}
        <Header handleDrawerToggle={handleDrawerToggle} />
        
        {/* Sidebar */}
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        
        {/* Main content */}
        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Toolbar /> {/* Empty toolbar to push content below header */}
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Analytics Route */}
            <Route path="/analytics" element={<Analytics />} />

            {/* Settings Route */}
            <Route path="/settings" element={<Settings />} />

            {/* Login and Signup Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;

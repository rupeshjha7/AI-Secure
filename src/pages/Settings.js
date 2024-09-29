// src/pages/Settings.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

function Settings() {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle settings save logic
    console.log('Settings saved:', settings);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: 600, margin: 'auto' }}>
      <Typography variant="h5" mb={2}>Settings</Typography>
      <TextField
        fullWidth
        label="Username"
        name="username"
        value={settings.username}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={settings.email}
        onChange={handleChange}
        margin="normal"
      />
      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        Save Settings
      </Button>
    </Box>
  );
}

export default Settings;

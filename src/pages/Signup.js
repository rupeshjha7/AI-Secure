// src/pages/Signup.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    console.log('Signup data:', signupData);
    navigate('/login'); // Redirect to login after signup
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5" mb={2}>Signup</Typography>
      <TextField
        fullWidth
        label="Username"
        name="username"
        value={signupData.username}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={signupData.email}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={signupData.password}
        onChange={handleChange}
        required
        margin="normal"
      />
      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        Signup
      </Button>
      <Button fullWidth variant="text" sx={{ mt: 1 }} onClick={() => navigate('/login')}>
        Already have an account? Login
      </Button>
    </Box>
  );
}

export default Signup;

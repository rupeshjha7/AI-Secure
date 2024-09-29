// src/pages/Login.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log('Login data:', loginData);
    navigate('/'); // Redirect to home after login
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: 400, margin: 'auto',alignContent:'center' }}>
      <Typography variant="h5" mb={2} textAlign="center">Signin</Typography>
      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={loginData.email}
        onChange={handleChange}
        required
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        name="password"
        type="password"
        value={loginData.password}
        onChange={handleChange}
        required
        margin="normal"
      />
      <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>
        Login
      </Button>
      <Button fullWidth variant="text" sx={{ mt: 1 }} onClick={() => navigate('/signup')}>
        Don't have an account? Sign up
      </Button>
    </Box>
  );
}

export default SignIn;

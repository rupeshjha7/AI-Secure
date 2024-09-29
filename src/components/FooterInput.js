import React, { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Send, AttachFile } from '@mui/icons-material';

const FooterInput = () => {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Handle message submission
  const handleSend = () => {
    if (message.trim()) {
      console.log('Message:', message);
      // Add your send message logic here
      setMessage('');
    }
  };

  // Handle file attachment
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setIsDialogOpen(true); // Open the dialog when a file is selected
    }
  };

  // Close the file dialog
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setFile(null); // Optionally clear the file after closing the dialog
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1200, // Keeps the footer on top of other content
        backgroundColor: 'white',
        borderTop: '1px solid #e0e0e0', // Optional: Add a top border for visual separation
      }}
    >
      {/* Text input with attach file */}
      <Box sx={{ flexGrow: 1, marginRight: '10px' }}>
        <TextField
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          variant="outlined"
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px', // Rounded corners for a chat-like feel
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {/* Attach File Button */}
                <IconButton color="primary" component="label">
                  <AttachFile />
                  <input
                    type="file"
                    hidden
                    onChange={handleFileChange}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Send Arrow Button */}
      <IconButton
        color="primary"
        onClick={handleSend}
        sx={{
          backgroundColor: '#1976d2', // Primary blue color for send button
          color: 'white',
          '&:hover': {
            backgroundColor: '#115293', // Darker blue on hover
          },
          borderRadius: '50%',
          padding: '10px',
        }}
      >
        <Send />
      </IconButton>

      {/* Dialog for file attachment */}
      <Dialog open={isDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Attached File</DialogTitle>
        <DialogContent>
          {file ? (
            <Typography variant="body1">File: {file.name}</Typography>
          ) : (
            <Typography variant="body1">No file attached.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default FooterInput;

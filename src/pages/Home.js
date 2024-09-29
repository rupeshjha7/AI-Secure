import React, { useState, useMemo } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  TextField,
  IconButton,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  InputAdornment,
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useTable } from 'react-table';

function Home() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [inputRows, setInputRows] = useState(1);

  // Handle dynamic input resizing based on the text length
  const handleInputChange = (event) => {
    const value = event.target.value;
    setPrompt(value);

    // Dynamically adjust the number of rows in the text field
    const rowCount = Math.min(5, Math.floor(value.length / 50) + 1);
    setInputRows(rowCount);
  };

  // Submit handler for querying the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const userMessage = { text: prompt, type: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setPrompt('');
    setLoading(true);

    const endpoint = 'https://1v3jikx5k1.execute-api.us-west-2.amazonaws.com/Prod/query'; // Replace with your actual endpoint

    try {
      const result = await axios.post(endpoint, { prompt });
      const botMessage = {
        text: result.data.response,
        type: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setData(result.data.response);
    } catch (error) {
      if (error.response) {
        console.error('Response error:', error.response.data);
      } else if (error.request) {
        console.error('Request error:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }

      const errorMessage = {
        text: 'Error fetching response: ' + error.message,
        type: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Define table columns dynamically based on the response data
  const columns = useMemo(
    () =>
      data.length > 0
        ? Object.keys(data[0]).map((key) => ({
            Header: key,
            accessor: key,
          }))
        : [],
    [data]
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Chat Message Box */}
      <Box
        className="chat-messages"
        sx={{
          flexGrow: 1,
          overflowY: '100vh',
          padding: 2,
          backgroundColor: '#ffffff',
        }}
      >
        {messages.map((message, index) => (
          <Box
            key={index}
            sx={{
              padding: 1,
              marginBottom: 1,
              backgroundColor: message.type === 'user' ? '#f1f1f1' : '#ffffff',
            }}
          >
            {typeof message.text === 'string' ? (
              <pre>{message.text}</pre>
            ) : (
              <TableContainer sx={{ marginTop: 2 }}>
                <Table {...getTableProps()} aria-label="data table">
                  <TableHead>
                    {headerGroups.map((headerGroup) => (
                      <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableHead>
                  <TableBody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <TableRow {...row.getRowProps()}>
                          {row.cells.map((cell) => (
                            <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        ))}
        {loading && <CircularProgress />}
      </Box>

      {/* Fixed Input Box */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          backgroundColor: '#ffffff',
        //   borderTop: '1px solid #e0e0e0',
          position: 'sticky',
          bottom: 0,
        }}
      >
        <TextField
          fullWidth
          multiline
          minRows={inputRows}
          maxRows={5}
          value={prompt}
          onChange={handleInputChange}
          placeholder="Enter your query"
          variant="outlined"
          size="small"
          disabled={loading}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton component="label">
                  <AttachFileIcon />
                  <input type="file" hidden />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton type="submit" color="primary" disabled={loading}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
}

export default Home;

import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: 30, paddingTop: 10 }}>
      <Container>
        <Grid container spacing={3}>
          {/* Chart Section */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Dashboard Overview</Typography>
              {/* Add your chart or other components here */}
            </Paper>
          </Grid>

          {/* Analytics Section */}
          <Grid item xs={12}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6">Analytics</Typography>
              {/* Analytics component or data */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;

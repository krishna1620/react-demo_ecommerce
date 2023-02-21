import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  TextField,
  Box,
  Grid,
} from '@mui/material';

const Login = () => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'fixed',
        width: '100%',
        backgroundColor: 'aquamarine',
        margin: '-8px',
      }}
    >
      <Card style={{ marginRight: '5%', marginLeft: '5%' }}>
        <CardHeader title="E-commerce" />
        <CardContent>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} style={{ marginTop: '20px' }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button>Login</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;

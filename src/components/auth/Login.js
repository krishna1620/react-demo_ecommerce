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
        <CardHeader title="E-commerce" style={{ textAlign: 'center' }} />
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
        <CardActions style={{ textAlign: 'center', display: 'block' }}>
          <div>
            <Button variant="contained">Login</Button>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
              marginLeft: '0px',
              marginBottom: '5px',
            }}
          >
            <Button size="small">Forget Password?</Button>
            <Button size="small">Create Account</Button>
          </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;

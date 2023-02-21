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
import { useNavigate } from 'react-router-dom';
import '../../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  return (
    <Box className="loginBox">
      <Card className="loginCard">
        <CardHeader title="E-commerce" className="alignCenter" />
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
          <Button variant="contained">Sign in</Button>
          <Button variant="contained" onClick={() => navigate('/Create-User')}>
            sign up
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;

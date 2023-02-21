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

import '../../css/createUser.css';

const CreateUser = () => {
  const navigate = useNavigate();
  return (
    <Box className="createUserBox">
      <Card className="createUserCard">
        <CardHeader title="Create User" className="alignCenter" />
        <CardContent>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} style={{ marginTop: '10px' }}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} style={{ marginTop: '10px' }}>
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} style={{ marginTop: '10px' }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid xs={12} style={{ marginTop: '10px' }}>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          style={{ justifyContent: 'center' }}
          className="createUserButton"
        >
          <Button variant="contained" color="success">
            Create
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate('/')}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CreateUser;

import React from "react";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Box>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}>
        <Typography
          variant="h3"
          component="div">
          Login Screen
        </Typography>
        <Typography
          variant="p"
          component="div">
          Enter your account details here to login.
        </Typography>
        <TextField
          id="email-login"
          label="Email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="password-login"
          label="Password"
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          href="/register"
          style={{ margin: "10px 0" }}>
          Register
        </Button>
      </Grid>
    </Box>
  );
};

export default Login;

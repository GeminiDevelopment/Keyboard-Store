import { Component } from "react";
import { Button, Typography, AppBar, Box, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import BasicModal from "./Modal.js";

export default class Navbar extends Component {
  render() {
    return (
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <Typography
                sx={{ flexGrow: 1 }}
                variant="h6"
                component="div"
                href="/"
              >
                Keeb City
              </Typography>
            </Link>
            <Button variant="text" color="inherit" href="/store">
              Store
            </Button>
            <Button variant="text" color="inherit" href="/group-buy">
              Group Buy
            </Button>
            <Button variant="text" color="inherit" href="/contact">
              Contact
            </Button>
            <Button variant="text" color="inherit" href="/login">
              Login
            </Button>
            <BasicModal/>
          </Toolbar>
        </AppBar>
        
      </Box>
    );
  }
}
import React from "react";

import { mdiAccount, mdiCartHeart } from "@mdi/js";
import Icon from "@mdi/react";

import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box flexGrow="1">
      <AppBar position="static">
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            flexGrow="1"
            justifyContent="space-between">
            {/* Left Side */}
            <Box>
              <Button
                variant="text"
                color="inherit">
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}>
                  Keeb City
                </Link>
              </Button>
              <Button
                variant="text"
                color="inherit"
                href="/store">
                Store
              </Button>
              <Button
                variant="text"
                color="inherit"
                href="/group-buy">
                Group Buy
              </Button>
              <Button
                variant="text"
                color="inherit"
                href="/contact">
                Contact
              </Button>
            </Box>
            {/* Right Side */}
            <Box>
              <Button
                variant="text"
                color="inherit"
                href="/login">
                <Icon
                  path={mdiAccount}
                  size={1}
                  color="inherit"
                />
              </Button>
              <Button
                variant="text"
                color="inherit"
                href="/favourites">
                <Icon
                  path={mdiCartHeart}
                  size={1}
                  color="inherit"
                />
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

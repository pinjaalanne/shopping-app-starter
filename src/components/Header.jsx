import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Shopping App
            </Typography>
          </Typography>
          <Button color="inherit" variant="text" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" variant="text" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" variant="text" component={Link} to="/products">
            Products
          </Button>
          <Button color="inherit" variant="text" component={Link} to="/cart">
            Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

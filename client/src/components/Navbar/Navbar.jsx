import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  useTheme

} from '@mui/material';
import { AccountCircle, Menu as MenuIcon, LightMode, DarkMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../features/global';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();

  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.global);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleTheme = () => {
    dispatch(toggleMode());
  }
  const menuItems = ['Home', 'All Donors', 'Contact', 'Blog'];
  return (
    <AppBar sx={{background:theme.palette.customBackground.default}} position="static">
      <Container>

   
      <Toolbar>
        
        <Typography component={Link} to="/" variant="h6" sx={{ flexGrow: 1, cursor:'pointer' ,color:"white", textDecoration:"none" }}>
          Blood Buddy
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>


          {menuItems.map((item) => (
            <Button color="inherit" key={item}>
              {item}
            </Button>
          ))}



          <IconButton
            size="large"
            color="inherit"
            onClick={toggleTheme}
          >
            {mode === "light" ? <DarkMode /> : <LightMode />}

          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical:'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>
        
          <Button component={Link} to="/signup" variant="outlined" color="inherit" sx={{ ml: 2 }}>
            Sign up
          </Button>
        
          <Button component={Link} to="/login" variant="contained" color="dark" sx={{ ml: 2 }}>
            Login
          </Button>
        </Box>

        <IconButton sx={{ display: { sm: 'none' } }} edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>

      </Toolbar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
          <ListItem>
            <Button variant="outlined" color="inherit">
              Sign up
            </Button>
          </ListItem>
          <ListItem>
          <Button variant="contained" color="primary">
            Login
          </Button>
          </ListItem>

      
        </List>
      </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
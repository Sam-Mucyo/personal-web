import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  useScrollTrigger,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { navbarConfig } from '../config/navbar';

function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        color={trigger ? 'default' : 'transparent'} 
        elevation={trigger ? 4 : 0}
        sx={{
          transition: 'all 0.3s ease-in-out',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          backgroundColor: trigger ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Link to="home" smooth={true} duration={500}>
              <Button color="primary" sx={{ fontSize: '1.2rem', fontWeight: 600 }}>
                {navbarConfig.logo}
              </Button>
            </Link>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navbarConfig.navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-64}
                >
                  <Button color="primary">{item}</Button>
                </Link>
              ))}
            </Box>

            <IconButton
              color="primary"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        <List sx={{ width: 250 }}>
          {navbarConfig.navItems.map((item) => (
            <ListItem key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-64}
                onClick={handleDrawerToggle}
                style={{ width: '100%' }}
              >
                <ListItemText primary={item} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;

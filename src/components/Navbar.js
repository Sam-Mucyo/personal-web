import React, { useState, useEffect } from 'react';
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
  useTheme,
  Tooltip,
  Avatar,
  ListItemButton,
  ListItemIcon,
  Divider,
  alpha,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Link } from 'react-scroll';
import { navbarConfig } from '../config/navbar';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar({ toggleColorMode, currentMode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 60,
  });

  useEffect(() => {
    setScrolled(trigger);
  }, [trigger]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0}
        sx={{
          transition: 'all 0.3s ease-in-out',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          backgroundColor: scrolled 
            ? alpha(theme.palette.background.default, theme.palette.mode === 'light' ? 0.9 : 0.8) 
            : 'transparent',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
        }}
        component={motion.nav}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: { xs: 1, md: 1.5 } }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="home" smooth={true} duration={500} style={{ textDecoration: 'none' }}>
                <Box 
                  component="img"
                  src={require('../img/logo.png')}
                  alt="Logo"
                  sx={{ 
                    height: { xs: '30px', md: '40px' },
                    width: 'auto',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </Link>
            </motion.div>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
                {navbarConfig.navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
                  >
                    <Link
                      to={item.toLowerCase()}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      activeClass="active"
                    >
                      {({ isActive }) => (
                        <Button 
                          color="primary"
                          sx={{ 
                            position: 'relative',
                            fontWeight: 500,
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              width: isActive ? '100%' : '0%',
                              height: '3px',
                              bottom: '0',
                              left: '0',
                              backgroundColor: 'primary.main',
                              transition: 'width 0.3s ease-in-out',
                              borderRadius: '3px',
                            },
                            '&:hover::after': {
                              width: '100%',
                            },
                            px: 2,
                          }}
                        >
                          {item}
                        </Button>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </Box>
              
              <Tooltip title={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}>
                <IconButton 
                  onClick={toggleColorMode} 
                  color="primary"
                  sx={{ 
                    ml: { xs: 0, md: 2 },
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.2),
                    },
                  }}
                >
                  {currentMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
              </Tooltip>

              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  display: { md: 'none' },
                  ml: 1,
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ 
          display: { md: 'none' },
          '& .MuiDrawer-paper': { 
            width: '100%', 
            maxWidth: '300px',
            boxSizing: 'border-box',
            backgroundColor: theme.palette.background.default,
          },
        }}
        component={AnimatePresence}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box 
              component="img"
              src={require('../img/logo.png')}
              alt="Logo"
              sx={{ 
                height: '40px',
                width: 'auto',
              }}
            />
            <Box sx={{ ml: 2, fontWeight: 600, fontSize: '1.1rem' }}>
              Samuel Mucyo
            </Box>
          </Box>
          <IconButton onClick={handleDrawerToggle} edge="end">
            <CloseIcon />
          </IconButton>
        </Box>
        
        <Divider sx={{ mb: 2 }} />
        
        <List sx={{ px: 2 }}>
          {navbarConfig.navItems.map((item, index) => (
            <ListItemButton 
              key={item}
              sx={{ 
                borderRadius: 2,
                mb: 1,
                '&:hover': { 
                  backgroundColor: alpha(theme.palette.primary.main, 0.1),
                },
              }}
              component={motion.div}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleDrawerToggle}
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <ListItemText 
                  primary={item} 
                  primaryTypographyProps={{ 
                    fontWeight: 500,
                    color: theme.palette.text.primary,
                  }}
                />
              </Link>
            </ListItemButton>
          ))}
          
          <ListItemButton 
            onClick={toggleColorMode}
            sx={{ 
              borderRadius: 2,
              mt: 2,
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
              '&:hover': { 
                backgroundColor: alpha(theme.palette.primary.main, 0.2),
              },
            }}
            component={motion.div}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: navbarConfig.navItems.length * 0.05 }}
          >
            <ListItemIcon>
              {currentMode === 'light' ? <DarkModeIcon color="primary" /> : <LightModeIcon color="primary" />}
            </ListItemIcon>
            <ListItemText 
              primary={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`} 
              primaryTypographyProps={{ 
                fontWeight: 500,
                color: theme.palette.text.primary,
              }}
            />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;

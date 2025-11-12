import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, Button, Box, Container
} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EcoIcon from '@mui/icons-material/Eco';
import StarIcon from '@mui/icons-material/Star';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: <HomeIcon /> },
    { path: '/about', label: 'About', icon: <InfoIcon /> },
    { path: '/naturals', label: 'Natural', icon: <EcoIcon /> },
    { path: '/specials', label: 'Special', icon: <StarIcon /> },
    { path: '/contact', label: 'Contact', icon: <ContactMailIcon /> }
  ];

  return (
    <AppBar position="sticky" sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <LocalFloristIcon sx={{ display: 'flex', mr: 1, fontSize: 30 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              display: 'flex',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Orchids Collection
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                startIcon={item.icon}
                sx={{
                  color: 'white',
                  backgroundColor: isActive(item.path) ? 'rgba(255,255,255,0.2)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.15)'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;

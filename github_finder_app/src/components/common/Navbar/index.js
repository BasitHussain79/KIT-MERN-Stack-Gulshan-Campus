import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import style from './style';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={style.flexBetween}>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => navigate('/')}
          >
            <SupervisedUserCircleIcon sx={style.icon} /> GitHub Finder App
          </IconButton>
          <Box component='ul' sx={style.flexStart}>
            <Box component='li'>
              <Link to='/about'>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  About
                </Typography>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

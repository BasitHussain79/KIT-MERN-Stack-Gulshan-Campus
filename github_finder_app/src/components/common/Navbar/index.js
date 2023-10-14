import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import style from './style';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={style.flexBetween}>
          <Link to='/'>
            <Box style={style.flexCenter}>
              <SupervisedUserCircleIcon sx={style.icon} />{' '}
              <span style={style.logoText}>GitHub Finder App</span>
            </Box>
          </Link>
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

      <Toolbar />
    </Box>
  );
};

export default Navbar;

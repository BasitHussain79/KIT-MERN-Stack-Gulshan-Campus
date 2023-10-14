import React from 'react';
import { Box } from '@mui/material';
import spinnerImg from '../../../assets/img/spinner.gif';

const Spinner = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      sx={{ width: '100%' }}
    >
      <Box component='img' src={spinnerImg} alt='loading...' height={100} />
    </Box>
  );
};

export default Spinner;

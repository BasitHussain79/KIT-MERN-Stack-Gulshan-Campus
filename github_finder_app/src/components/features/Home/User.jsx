import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const User = ({ user }) => {
  return (
    <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        sx={{
          width: '250px',
          padding: '20px 14px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          boxShadow: '1px 3px 4px rgba(0,0,0,0.2)',
          '& img': {
            width: '130px',
            height: '130px',
            borderRadius: '100%',
            boxShadow: '1px 3px 4px rgba(0,0,0,0.2)',
          },

          '@media only screen and (max-width: 599px)': {
            width: '100%',
            maxWidth: '75%',
            margin: 'auto',
            padding: '30px 14px',
          },
        }}
      >
        <Box component='img' src={user.avatar_url} alt={user.login} />
        <Typography
          variant='h4'
          fontSize={16}
          align='center'
          textTransform='capitalize'
          fontWeight={600}
          mt={2}
        >
          {user.login}
        </Typography>

        <Button type='button' variant='contained' sx={{ mt: 2 }}>
          Profile
        </Button>
      </Box>
    </Grid>
  );
};

export default User;

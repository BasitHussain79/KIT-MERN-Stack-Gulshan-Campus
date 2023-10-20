import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const SearchBar = ({ getQueryHandler, clearUserHandler }) => {
  const [searchUser, setSearchUser] = useState('');

  const onChangeHandler = (e) => setSearchUser(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    getQueryHandler(searchUser);
    setSearchUser('');
  };

  return (
    <Box component='form' onSubmit={submitHandler}>
      <TextField
        id='searchUsers'
        label='Search Users'
        variant='filled'
        value={searchUser}
        onChange={onChangeHandler}
        fullWidth
      />
      <Box display='flex' gap={4} mt={2} mb={5}>
        <Button type='submit' variant='contained' fullWidth>
          Search
        </Button>

        <Button
          type='submit'
          variant='contained'
          color='warning'
          fullWidth
          onClick={() => clearUserHandler()}
        >
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;

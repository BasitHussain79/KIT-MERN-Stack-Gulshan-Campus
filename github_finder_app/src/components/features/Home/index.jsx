import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import axios from 'axios';
import { SearchBar, Spinner } from '../../common';
import Layout from '../../ui/Layout';
import User from './User';

const HomeDefault = () => {
  const [data, setData] = useState({
    loading: false,
    users: [],
  });
  const [query, setQuery] = useState('');

  const getQueryHandler = (text) => setQuery(text);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setData((prevState) => ({ ...prevState, loading: true }));
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
        );
        setData({ users: response.data.items, loading: false });
      } catch (err) {
        console.log(err.message);
        setData((prevState) => ({ ...prevState, loading: false }));
      }
    };

    getAllUsers();

    // axios
    //   .get('https://api.github.com/users')
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  }, [query]);

  const clearUserHandler = () => {
    setData({
      loading: false,
      users: [],
    });
  };

  return (
    <Layout>
      <SearchBar
        getQueryHandler={getQueryHandler}
        clearUserHandler={clearUserHandler}
      />
      <Grid
        container
        spacing={2}
        rowGap={2}
        justifyContent={{
          lg: 'space-between',
          xl: 'space-between',
          md: 'space-between',
          sm: 'center',
          xs: 'center',
        }}
        justifyItems='center'
        alignItems='center'
      >
        {data.loading && <Spinner />}

        {!data.loading &&
          data.users &&
          data.users.length > 0 &&
          data.users.map((user) => <User key={user.id} user={user} />)}
      </Grid>
    </Layout>
  );
};

export default HomeDefault;

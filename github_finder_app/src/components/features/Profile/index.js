import React, { useEffect, useState } from 'react';
import Layout from '../../ui/Layout';
import { Grid } from '@mui/material';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const ProfileDefault = () => {
  const location = useLocation();
  const { name } = useParams();

  const [profile, setProfile] = useState({
    loading: true,
    data: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    axios
      .get(`https://api.github.com/users/${name}`, {
        signal: abortController.signal,
      })
      .then((data) => setProfile({ loading: false, data: data.data }))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('operation is cancelled');
        } else {
          console.log(err.message);
        }
      });

    return () => {
      abortController.abort();
    };
  }, [name]);

  return (
    <Layout>
      <Grid container mt={4}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}></Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          Item2
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProfileDefault;

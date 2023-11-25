import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Layout from '../../ui/Layout';
import AlertContext from '../../../context/alert/alertContext';
import AuthContext from '../../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const LoginDefault = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const { alertHandler } = alertContext;
  const { error, clearErrorHandler, isAuthenticated, loginUserHandler } =
    authContext;

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }

    if (error) {
      alertHandler(error, 'danger');
      clearErrorHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthenticated]);

  const onChangeHandler = (e) => {
    setLogin((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alertHandler('Please insert all required fields!', 'danger');
    } else {
      loginUserHandler(login);
    }
  };

  return (
    <Layout maxWidth='550px'>
      <Form
        onSubmit={submitHandler}
        style={{
          borderRadius: '10px',
          padding: '20px',
          color: '#fff',
          background: '#333',
        }}
      >
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={login.email}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='password'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={login.passowrd}
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </Layout>
  );
};

export default LoginDefault;

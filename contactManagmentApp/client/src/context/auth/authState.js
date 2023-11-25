import React, { useReducer } from 'react';
import axios from 'axios';
import reducerMethod from './authReducer';
import AuthContext from './authContext';
import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  CLEAR_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../type';
import setAuthToken from '../../utils/setAuthToken';

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(reducerMethod, initialState);

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('api/auth');
      // console.log(res);
      dispatch({ type: AUTH_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_FAIL, payload: err.response.data.msg });
      console.log(err);
    }
  };

  const registerUserHandler = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/api/users', data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      if (localStorage.token) loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };

  const loginUserHandler = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/api/auth', data, config);
      console.log(res.data, '***');
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      if (localStorage.token) loadUser();
    } catch (err) {
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  const logoutHandler = () => {
    dispatch({ type: LOGOUT });
  };

  const clearErrorHandler = () => {
    dispatch({ type: CLEAR_ERROR });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        user: state.user,
        error: state.error,
        registerUserHandler,
        clearErrorHandler,
        loadUser,
        loginUserHandler,
        logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

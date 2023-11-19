import React, { createRef, useId, useReducer } from 'react';
import axios from 'axios';
import reducerMethod from './authReducer';
import AuthContext from './authContext';

const AuthState = ({ children }) => {
  const alertId = useId();
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(reducerMethod, initialState);

  const registerUserHandler = async (data) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const res = await axios.post('/api/users', data, config);
      console.log(res);
    } catch (err) {
      console.log(err.response.data.msg);
    }
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

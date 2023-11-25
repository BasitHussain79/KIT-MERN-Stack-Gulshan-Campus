import React, { useContext } from 'react';
import AuthContext from '../context/auth/authContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireAuth = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  return <>{isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />}</>;
};

export default RequireAuth;

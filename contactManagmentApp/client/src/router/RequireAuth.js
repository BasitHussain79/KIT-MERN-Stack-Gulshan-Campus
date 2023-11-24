import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const RequireAuth = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  const location = useLocation();

  return isAuthenticated && !isLoading ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

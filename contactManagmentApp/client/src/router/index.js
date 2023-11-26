import React, { useContext, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import RequireAuth from './RequireAuth';
import AuthContext from '../context/auth/authContext';
import defaultRoutes from './routes';

const AppRouter = () => {
  const { isAuthenticated, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  const { protectedRoutes, publicRoutes } = defaultRoutes;

  const publicPageRoutes = publicRoutes.map(({ label, path, component }) => {
    return <Route key={label} path={`/${path}`} element={component} />;
  });

  const protectedPageRoutes = protectedRoutes.map(
    ({ label, path, component }) => {
      return <Route key={label} path={`/${path}`} element={component} />;
    }
  );

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* public routes */}
        {!isAuthenticated && <>{publicPageRoutes}</>}

        {/* protected routes */}
        <Route element={<RequireAuth />}>{protectedPageRoutes}</Route>

        {/* catch all */}
        <Route
          path='*'
          element={<Navigate to={isAuthenticated ? '/' : '/login'} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;

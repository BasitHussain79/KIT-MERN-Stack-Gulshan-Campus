import React, { useContext } from 'react';
import defaultRoutes from './routes';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import AuthContext from '../context/auth/authContext';
import RequireAuth from './RequireAuth';
import Home from '../pages/home';

const AppRouter = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const { publicRoutes, protectedRoutes } = defaultRoutes;

  const publicPageRoutes = publicRoutes.map((data) => (
    <Route key={data.path} path={data.path} element={data.component} />
  ));

  const protectedPageRoutes = protectedRoutes.map((data) => (
    <Route key={data.path} path={data.path} element={data.component} />
  ));
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {!isAuthenticated && <>{publicPageRoutes}</>}
        <Route element={<RequireAuth />}>{protectedPageRoutes}</Route>
        <Route
          path='*'
          element={isAuthenticated ? <Home /> : <Navigate to='/login' />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;

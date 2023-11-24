import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import Layout from "./Layout";
import RequireAuth from "./RequireAuth";
import defaultRoutes from "./routes";

const AppRouter = () => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  const { publicRoutes, protectedRoutes } = defaultRoutes;

  const publicPageRoutes = publicRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  const protectedPageRoutes = protectedRoutes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {!isAuthenticated && <>{publicPageRoutes}</>}
        <Route element={<RequireAuth />}>{protectedPageRoutes}</Route>
        <Route
          path="*"
          element={<Navigate to={isAuthenticated && !isLoading ? "/" : "/login"} />}
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;

import Home from './../pages/home';
import Register from './../pages/register';
import Login from './../pages/login';

const routes = {
  homePage: {
    path: '/',
    component: <Home />,
  },
  register: {
    path: '/register',
    component: <Register />,
  },
  login: {
    path: '/login',
    component: <Login />,
  },
};

const defaultRoutes = {
  publicRoutes: [routes.login, routes.register],
  protectedRoutes: [routes.homePage],
};

export default defaultRoutes;

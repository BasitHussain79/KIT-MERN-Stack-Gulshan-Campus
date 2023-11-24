import About from "../pages/about";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

const routes = {
  home: {
    path: "/",
    element: <Home />,
  },
  login: {
    path: "/login",
    element: <Login />,
  },
  register: {
    path: "/register",
    element: <Register />,
  },
  about: {
    path: "/about",
    element: <About />,
  },
};

const defaultRoutes = {
  publicRoutes: [routes.login, routes.register, routes.about],
  protectedRoutes: [routes.home],
};

export default defaultRoutes;

import axios from "axios";
import React, { useReducer } from "react";
import setAuthToken from "../../utils/setAuthToken";
import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../type";
import AuthContext from "./authContext";
import reducerMethod from "./authReducer";

const AuthState = ({ children }) => {
  const initialState = {
    token: localStorage.getItem("token"),
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
      const res = await axios.get("/api/auth");
      console.log(res);
      dispatch({ type: AUTH_SUCCESS, payload: res.data });
    } catch (err) {
      console.log(err);
      dispatch({ type: AUTH_FAIL });
    }
  };

  const registerUserHandler = async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/users", data, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      if (localStorage.token) loadUser();
    } catch (err) {
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
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
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;

import { AUTH_FAIL, AUTH_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from "../type";

const reducerMethod = (state, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
         isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case REGISTER_FAIL:
    case AUTH_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: action?.payload ?? "Authentication failed",
      };
    default:
      return state;
  }
};

export default reducerMethod;

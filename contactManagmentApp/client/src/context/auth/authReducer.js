import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  CLEAR_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from '../type';

const reducerMethod = (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: localStorage.getItem('token'),
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: action?.payload ?? null,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default reducerMethod;

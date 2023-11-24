import { CLEAR_ALERT, SET_ALERT } from '../type';

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return [action.payload, ...state];
    case CLEAR_ALERT:
      return state.filter((data) => data.id !== action.payload);
    default:
      return state;
  }
};

export default alertReducer;

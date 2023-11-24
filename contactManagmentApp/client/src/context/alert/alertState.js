import React, { createRef, useId, useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { CLEAR_ALERT, SET_ALERT } from '../type';

const AlertState = ({ children }) => {
  const alertId = useId();
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const alertHandler = (msg, type, timeout = 5000) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        id: alertId + msg,
        msg,
        type,
        nodeRef: createRef(null),
      },
    });

    setTimeout(() => {
      dispatch({
        type: CLEAR_ALERT,
        payload: alertId + msg,
      });
    }, timeout);
  };

  return (
    <AlertContext.Provider value={{ alerts: state, alertHandler }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertState;

import React, { useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import AlertContext from '../../../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const BasicAlert = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;
  return (
    <>
      <TransitionGroup className='todo-list'>
        {alerts &&
          alerts.length > 0 &&
          alerts.map((alert) => (
            <CSSTransition
              key={alert.id}
              nodeRef={alert.nodeRef}
              timeout={500}
              classNames='item'
            >
              <Alert
                variant={alert.type}
                style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '2%',
                  zIndex: '111',
                }}
              >
                <div>{alert.msg}</div>
              </Alert>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </>
  );
};

export default BasicAlert;

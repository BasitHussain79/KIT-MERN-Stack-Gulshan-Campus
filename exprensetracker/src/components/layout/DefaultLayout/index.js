import React from 'react';
import './style.css';

const DefaultLayout = (props) => {
  return <div className='container'>{props.children}</div>;
};

export default DefaultLayout;

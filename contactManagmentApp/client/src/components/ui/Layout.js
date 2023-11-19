import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TopNavbar from '../common/Navbar';

const Layout = ({ children, maxWidth }) => {
  return (
    <Container fluid='false'>
      <TopNavbar />
      <Container className='my-5' style={{ width: '100%', maxWidth }}>
        <main>{children}</main>
      </Container>
    </Container>
  );
};

export default Layout;

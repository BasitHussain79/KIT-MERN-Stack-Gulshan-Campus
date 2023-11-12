import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import TopNavbar from '../common/Navbar';

const Layout = ({ children }) => {
  return (
    <Container fluid='false'>
      <TopNavbar />
      <Container className='my-5'>
        <main>{children}</main>
      </Container>
    </Container>
  );
};

export default Layout;

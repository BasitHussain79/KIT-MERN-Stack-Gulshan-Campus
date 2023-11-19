import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <Navbar bg='primary' data-bs-theme='dark' className='py-3'>
      <Container className='space-between'>
        <div>
          <Link to='/'>
            <Navbar.Brand>Contact Management App</Navbar.Brand>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '16px',
          }}
        >
          <Nav>
            <Link to='/register'>Register</Link>
          </Nav>
          <Nav>
            <Link to='/login'>Login</Link>
          </Nav>
          <Nav>
            <Link to='/about'>About</Link>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;

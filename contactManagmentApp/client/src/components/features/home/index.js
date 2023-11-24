import React, { useContext, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../ui/Layout';
import ContactForm from './Form';
import Contacts from './Contacts';
import Search from '../../common/Search';
import AuthContext from '../../../context/auth/authContext';

const HomeDefault = () => {
  const authContext = useContext(AuthContext);
  const {loadUser, isAuthenticated} = authContext;

  useEffect(() => {
    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Layout>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <Search />
          <Contacts />
        </Col>
      </Row>
    </Layout>
  );
};

export default HomeDefault;

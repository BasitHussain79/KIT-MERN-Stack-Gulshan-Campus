import React, { useContext, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../ui/Layout';
import ContactForm from './Form';
import Contacts from './Contacts';
import Search from '../../common/Search';
import AuthContext from '../../../context/auth/authContext';
import ContactContext from '../../../context/contact/contactContext';

const HomeDefault = () => {
  const authContext = useContext(AuthContext);
  const { getAllContacts } = useContext(ContactContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    getAllContacts();
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

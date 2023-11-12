import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../ui/Layout';
import ContactForm from './Form';
import Contacts from './Contacts';

const HomeDefault = () => {
  return (
    <Layout>
      <Row>
        <Col>
          <ContactForm />
        </Col>
        <Col>
          <Contacts />
        </Col>
      </Row>
    </Layout>
  );
};

export default HomeDefault;

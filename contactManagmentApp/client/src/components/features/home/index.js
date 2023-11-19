import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Layout from '../../ui/Layout';
import ContactForm from './Form';
import Contacts from './Contacts';
import Search from '../../common/Search';

const HomeDefault = () => {
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

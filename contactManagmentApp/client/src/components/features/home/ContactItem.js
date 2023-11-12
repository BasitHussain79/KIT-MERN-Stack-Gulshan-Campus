import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ContactContext from './../../../context/contact/contactContext';

const ContactItem = ({ id, name, email, phone, relation }) => {
  const contactContext = useContext(ContactContext);

  const { currentContact } = contactContext;

  const editHandler = () => {
    currentContact({
      id,
      name,
      email,
      phone,
      relation,
    });
  };

  return (
    <Card className='my-3' style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle
          className='mb-2'
          style={{
            color: relation.toLowerCase() === 'personal' ? 'blue' : '#333',
          }}
        >
          {relation}
        </Card.Subtitle>
        <Card.Text>
          <i className='fa-regular fa-envelope'></i> {email}
        </Card.Text>
        <Card.Text>
          <i className='fa-solid fa-phone'></i> {phone}
        </Card.Text>
        <Button variant='primary' className='me-2' onClick={editHandler}>
          Edit
        </Button>
        <Button variant='danger'>Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default ContactItem;

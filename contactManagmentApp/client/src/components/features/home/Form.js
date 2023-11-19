import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext, useEffect, useState } from 'react';
import ContactContext from './../../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, currentContactData, clearCurrentContact, updateContact } =
    contactContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    relation: 'Personal',
  });

  useEffect(() => {
    setContact({
      name: currentContactData?.name ?? '',
      email: currentContactData?.email ?? '',
      phone: currentContactData?.phone ?? '',
      relation: currentContactData?.relation ?? '',
    });
  }, [currentContactData]);

  const onChangeHandler = (e) => {
    setContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    currentContactData !== null
      ? updateContact({ id: currentContactData.id, ...contact })
      : addContact(contact);

    clearCurrentContact();

    setContact({
      name: '',
      email: '',
      phone: '',
      relation: '',
    });
  };

  return (
    <Form
      onSubmit={submitHandler}
      style={{
        borderRadius: '10px',
        padding: '20px',
        color: '#fff',
        background: '#333',
      }}
    >
      <Form.Group className='mb-3' controlId='name'>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          required
          name='name'
          value={contact.name}
          onChange={onChangeHandler}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          required
          name='email'
          value={contact.email}
          onChange={onChangeHandler}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='phone'>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter phone no.'
          required
          name='phone'
          value={contact.phone}
          onChange={onChangeHandler}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='relation'>
        <Form.Check
          type='radio'
          label='Personal'
          id='personal'
          name='relation'
          checked={contact.relation === 'Personal'}
          value='Personal'
          onChange={onChangeHandler}
        />
        <Form.Check
          type='radio'
          label='Professional'
          id='Professional'
          name='relation'
          checked={contact.relation === 'Professional'}
          value='Professional'
          onChange={onChangeHandler}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;

import React, { useContext, useRef } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import Form from 'react-bootstrap/Form';

const Search = () => {
  const contactContext = useContext(ContactContext);

  const { searchContacts } = contactContext;

  const searchRef = useRef('');

  const searchHandler = (e) => {
    if (e.target.value !== null) {
      searchRef.current.value = e.target.value;
      searchContacts(e.target.value);
    } else {
      searchRef.current.value = '';
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Form.Control
          type='text'
          ref={searchRef}
          placeholder='Search Contacts'
          onChange={searchHandler}
        />
      </form>
    </>
  );
};

export default Search;

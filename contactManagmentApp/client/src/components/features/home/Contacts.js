import React, { useContext } from 'react';
import ContactContext from '../../../context/contact/contactContext';
import ContactItem from './ContactItem';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  console.log(contacts);

  return (
    <>
      {contacts.map((data) => (
        <ContactItem
          key={data.id}
          id={data.id}
          name={data.name}
          email={data.email}
          phone={data.phone}
          relation={data.relation}
        />
      ))}
    </>
  );
};

export default Contacts;

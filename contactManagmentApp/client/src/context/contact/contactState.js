import React, { useId, useReducer } from 'react';
import ContactContext from './contactContext';
import reducerMethod from './contactReducer';
import { ADD_CONTACT, CURRENT_CONTACT, UPDATE_CONTACT } from '../type';

const ContactState = ({ children }) => {
  const id = useId();
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Basit',
        email: 'basit@gmail.com',
        phone: '1111111111',
        relation: 'Personal',
      },
      {
        id: 2,
        name: 'Areeb',
        email: 'areeb@gmail.com',
        phone: '1111211111',
        relation: 'Personal',
      },
      {
        id: 3,
        name: 'Owais',
        email: 'owais@gmail.com',
        phone: '1111111222',
        relation: 'Professional',
      },
    ],
    currentContact: null,
  };

  const [state, dispatch] = useReducer(reducerMethod, initialState);

  // add contact
  const addContactHandler = (data) => {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        id: id + data.email,
        ...data,
      },
    });
  };

  // current contact
  const currentContactHandler = (data) => {
    dispatch({
      type: CURRENT_CONTACT,
      payload: data,
    });
  };

  // current contact
  const updateContactHandler = (data) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: data,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact: addContactHandler,
        currentContact: currentContactHandler,
        currentContactData: state.currentContact,
        updateContact: updateContactHandler,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;

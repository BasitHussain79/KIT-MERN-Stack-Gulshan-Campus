import React, { useId, useReducer } from 'react';
import ContactContext from './contactContext';
import reducerMethod from './contactReducer';
import {
  ADD_CONTACT,
  CLEAR_CURRENT_CONTACT,
  CURRENT_CONTACT,
  DELETE_CONTACT,
  SEARCH_CONTACT,
  UPDATE_CONTACT,
} from '../type';

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
    filteredContacts: [],
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

  // clear current contact
  const clearCurrentContactHandler = () => {
    dispatch({
      type: CLEAR_CURRENT_CONTACT,
    });
  };

  // update contact
  const updateContactHandler = (data) => {
    dispatch({
      type: UPDATE_CONTACT,
      payload: data,
    });
  };

  // delete contact
  const deleteContactHandler = (id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    });
  };

  // filter contact
  const searchContactsHandler = (text) => {
    dispatch({
      type: SEARCH_CONTACT,
      payload: text,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        currentContactData: state.currentContact,
        filteredContacts: state.filteredContacts,
        addContact: addContactHandler,
        updateContact: updateContactHandler,
        currentContact: currentContactHandler,
        clearCurrentContact: clearCurrentContactHandler,
        deleteContact: deleteContactHandler,
        searchContacts: searchContactsHandler,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;

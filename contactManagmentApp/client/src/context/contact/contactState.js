import React, { useId, useReducer } from 'react';
import ContactContext from './contactContext';
import reducerMethod from './contactReducer';
import {
  ADD_CONTACT,
  CLEAR_CURRENT_CONTACT,
  CURRENT_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  SEARCH_CONTACT,
  UPDATE_CONTACT,
} from '../type';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

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

  // get contacts
  const getAllContactsHandler = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('api/contacts');
      dispatch({
        type: GET_CONTACTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // add contact
  const addContactHandler = async (data) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/contacts', data, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
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
  const updateContactHandler = async (data) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`api/contacts/${data.id}`, data, config);
      console.log(res);
      dispatch({
        type: UPDATE_CONTACT,
        payload: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // delete contact
  const deleteContactHandler = async (id) => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      await axios.delete(`api/contacts/${id}`);
      dispatch({
        type: DELETE_CONTACT,
        payload: id,
      });
    } catch (err) {
      console.log(err);
    }
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
        getAllContacts: getAllContactsHandler,
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

import {
  ADD_CONTACT,
  CLEAR_CURRENT_CONTACT,
  CURRENT_CONTACT,
  DELETE_CONTACT,
  SEARCH_CONTACT,
  UPDATE_CONTACT,
} from '../type';

const reducerMethod = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((data) => {
          if (data.id.toString() === action.payload.id.toString()) {
            return action.payload;
          }
          return data;
        }),
      };
    case CURRENT_CONTACT:
      return { ...state, currentContact: action.payload };
    case CLEAR_CURRENT_CONTACT:
      return { ...state, currentContact: null };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((data) => data.id !== action.payload),
      };
    case SEARCH_CONTACT:
      const regex = new RegExp(`${action.payload}`, 'gi');
      return {
        ...state,
        filteredContacts: state.contacts.filter((data) => {
          return (
            data.name.includes(data.name.match(regex)) ||
            data.email.includes(data.email.match(regex))
          );
        }),
      };
    default:
      return state;
  }
};

export default reducerMethod;

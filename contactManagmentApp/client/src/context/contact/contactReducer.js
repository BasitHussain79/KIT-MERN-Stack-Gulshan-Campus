import { ADD_CONTACT, CURRENT_CONTACT, UPDATE_CONTACT } from '../type';

const reducerMethod = (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case CURRENT_CONTACT:
      return { ...state, currentContact: action.payload };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((data) => {
          console.log(data.id, action.payload);
          if (data.id.toString() === action.payload.id.toString()) {
            console.log(action.payload);
            return action.payload;
          }
          return data;
        }),
      };
    default:
      return state;
  }
};

export default reducerMethod;

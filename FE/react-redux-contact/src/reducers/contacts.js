import { ADD_CONTACT, REMOVE_CONTACT, SHOW_CREATE_CONTACT } from '../actions/index';

const initialState = {
    contacts: [{
        id: 1,
        name: "Ester",
        lastName: "Cobo Cobo",
        phone: 6565656,
        city: "Jaen"
    }]
};

function contactReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            action.newContact.id = Math.floor(Math.random() * 100);
            return {
                ...state,
                contacts: [...state.contacts, action.newContact]
            };

        case SHOW_CREATE_CONTACT:
            return {
                ...state,
                showCreateContact: action.isShown
            };
        case REMOVE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.id)
            };
        default:
            return state;
    }
}

export default contactReducers;
import {
    ADD_CONTACT,
    UPDATE_FORM_NEW_CONTACT,
    SET_IS_CONTACT_SAVED,
    REMOVE_CONTACT,
    REQUEST_CONTACTS,
    RECEIVE_CONTACTS
} from '../actions/index';

const initialState = {
    contacts: [],
    newContact: {
        id: '',
        name: '',
        lastName: '',
        phone: ''
    },
    isContactSaved: false
};

function contactReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            action.newContact.id = (state.contacts.length + 1);
            return {
                ...state,
                contacts: [...state.contacts, action.newContact]
            };
        case UPDATE_FORM_NEW_CONTACT:
            const newContact = Object.assign({}, state.newContact, {[action.field]: action.newValue});
            return {
                ...state,
                newContact: newContact
            };
        case SET_IS_CONTACT_SAVED:
            return {
                ...state,
                isContactSaved: action.isContactSaved
            };
        case REMOVE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.id)
            };
        case REQUEST_CONTACTS:
        case RECEIVE_CONTACTS:
            return {
                ...state,
                contacts: action.contacts
            };
        default:
            return state;
    }
}

export default contactReducers;
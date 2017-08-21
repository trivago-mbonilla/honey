
// http://redux.js.org/docs/basics/Actions.html
// Actions describe the fact that something happened, but don't specify how the application's state changes in response.

/*
 * action types
 */
export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_FORM_NEW_CONTACT = 'UPDATE_FORM_NEW_CONTACT';
export const SET_IS_CONTACT_SAVED = 'SET_IS_CONTACT_SAVED';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';


/*
 * action creators
 */
export function addContact(newContact) {
    return {
        type: ADD_CONTACT,
        newContact
    }
}

export function updateFormNewContact(newValue, field) {
    return {
        type: UPDATE_FORM_NEW_CONTACT,
        newValue: newValue,
        field: field
    }
}

export function setIsContactSaved(isContactSaved) {
    return {
        type: SET_IS_CONTACT_SAVED,
        isContactSaved: isContactSaved
    }
}

export function removeContact(id) {
    return {
        type: REMOVE_CONTACT,
        id
    }
}

function requestContacts() {
    return {
        type: REQUEST_CONTACTS
    }
}

function receiveContacts(contacts) {
    return {
        type: RECEIVE_CONTACTS,
        contacts: contacts
    }
}

function shouldFetchContacts(state) {
    return (!state.contacts || 0 === state.contacts.length);
}

function fetchContacts() {
    return dispatch => {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestContacts());

        return fetch('http://localhost:3004/contacts')
            .then(response => response.json())
            .then(
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                json => dispatch(receiveContacts(json))
            );
    }
}

export function fetchContactsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchContacts(getState())) {
            return dispatch(fetchContacts())
        }
    }
}
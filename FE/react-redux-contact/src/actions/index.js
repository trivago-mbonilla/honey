
// http://redux.js.org/docs/basics/Actions.html
// Actions describe the fact that something happened, but don't specify how the application's state changes in response.

/*
 * action types
 */
export const ADD_CONTACT = 'ADD_CONTACT';
export const SHOW_CREATE_CONTACT = 'SHOW_CREATE_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';


/*
 * action creators
 */
export function addContact(newContact) {
    return {
        type: ADD_CONTACT,
        newContact
    }
}

export function showCreateContact(isShown) {
    return {
        type: SHOW_CREATE_CONTACT,
        isShown
    }
}

export function removeContact(id) {
    return {
        type: REMOVE_CONTACT,
        id
    }
}
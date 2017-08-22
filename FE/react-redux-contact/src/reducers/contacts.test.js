import contactReducers from './contacts';
import {ADD_CONTACT} from '../actions/index';
import deepFreeze from 'deep-freeze';

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

describe('contacts reducers', () => {
    it('should return the initial state', () => {
        expect(contactReducers(
            undefined,
            {}
        )).toEqual(initialState);
    });

    it('should add a contact', () => {
        expect(contactReducers(
            // important! use the deepFreeze in the initialState
            // of the reducers to test that the state is not modify
            deepFreeze(initialState),
            {
                type: ADD_CONTACT,
                newContact: {
                    id: 1,
                    name: 'ester',
                    lastName: 'cobo',
                    phone: '65656'
                }
            }
        )).toEqual({
            ...initialState,
            contacts: [{
                id: (initialState.contacts.length + 1),
                name: 'ester',
                lastName: 'cobo',
                phone: '65656'
            }]
        })
    })
});
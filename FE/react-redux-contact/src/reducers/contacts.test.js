import contactReducers from './contacts';
import {ADD_CONTACT} from '../actions/index';

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
            initialState,
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
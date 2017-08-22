import {
    ADD_CONTACT,
    addContact,
    UPDATE_FORM_NEW_CONTACT,
    updateFormNewContact,
    fetchContacts,
    requestContacts,
    REQUEST_CONTACTS,
    RECEIVE_CONTACTS
} from './index';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

describe('sync actions', () => {
    it('should add a contact', () => {
        const newContact = {
            id: 1,
            name: 'ester',
            lastName: 'cobo',
            phone: 6656565
        };
        const expectedAction = {
            type: ADD_CONTACT,
            newContact
        };

        expect(addContact(newContact)).toEqual(expectedAction);
    });

    it('should update form new contact', () => {
        const newValue = 'ester';
        const field = 'name';
        const expectedAction = {
            type: UPDATE_FORM_NEW_CONTACT,
            newValue,
            field
        };

        expect(updateFormNewContact(newValue, field)).toEqual(expectedAction);
    });
});

describe('async actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);

    afterEach(() => {
        nock.cleanAll()
    });

    it('fetch contacts', () => {

        const contacts = [{
            id: 1,
            name: "Ester",
            lastName: "Cobo Cobo",
            phone: 6565656,
            city: "Jaen"
        }];

        nock('http://localhost:3004')
            .get('/contacts')
            .reply(200, contacts);

        const expectedActions = [
            {type: REQUEST_CONTACTS},
            {type: RECEIVE_CONTACTS, contacts}
        ];

        const store = mockStore({ contacts: [] });

        return store.dispatch(fetchContacts()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })

    });
});
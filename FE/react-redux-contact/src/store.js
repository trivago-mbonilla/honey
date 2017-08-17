import { createStore } from 'redux';
import testContactReducers from './reducers/index';

const initialState = {
    contacts: [{
        id: 1,
        name: "Ester",
        lastName: "Cobo Cobo",
        phone: 6565656,
        city: "Jaen"
    }]
};

const store = createStore(
    testContactReducers,
    initialState
);

export default store;
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import testContactReducers from './reducers/index';

// const initialState = {
//     contacts: [{
//         id: 1,
//         name: "Ester",
//         lastName: "Cobo Cobo",
//         phone: 6565656,
//         city: "Jaen"
//     }]
// };

export default function configureStore() {
    return createStore(
        testContactReducers,
        // initialState,
        applyMiddleware(
            thunkMiddleware // lets us dispatch() functions
        )
    )
}
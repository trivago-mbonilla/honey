
// http://redux.js.org/docs/basics/Reducers.html
// The reducer is a pure function that takes the previous state and an action, and returns the next state.
// if there is more reducers, use the combineReducers
import { combineReducers } from 'redux';
import contactReducers from './contacts';

// using the combine for the future, when we have more reducers
// const testContactApp = combineReducers({
//     contactReducers
// });

const testContactApp = contactReducers;

export default testContactApp;
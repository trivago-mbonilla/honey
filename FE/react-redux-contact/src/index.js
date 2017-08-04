import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import testContactApp from './reducers/index';

const store = createStore(testContactApp);
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
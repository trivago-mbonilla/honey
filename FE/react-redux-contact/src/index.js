import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { ApolloProvider } from 'react-apollo';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';
import client from './apolloClientConfig';

const store = configureStore();

render(
    <ApolloProvider store={store} client={client}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
);
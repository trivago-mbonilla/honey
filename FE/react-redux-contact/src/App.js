import React, { Component } from 'react';
import './App.css';
import ContactViewContainer from './containers/ContactViewContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ContactViewContainer />
            </div>
        );
    }
}

export default App;

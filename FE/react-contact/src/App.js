import React, { Component } from 'react';
import './App.css';
import ContactView from './View/ContactView';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ContactView/>
            </div>
        );
    }
}

export default App;

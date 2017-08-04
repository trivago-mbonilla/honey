import React, { Component } from 'react';
import './App.css';
import ContactView from './components/ContactView/ContactView';
import ContactViewContainer from './containers/ContactViewContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <ContactViewContainer />
                <ContactView/>
            </div>
        );
    }
}

export default App;

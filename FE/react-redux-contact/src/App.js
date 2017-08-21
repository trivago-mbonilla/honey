import React, { Component } from 'react';
import './App.css';
import ContactView from './containers/ContactView';
import CreateContact from './containers/CreateContact';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={ContactView}/>
                    <Route path='/create' component={CreateContact}/>
                </Switch>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import ContactView from './containers/ContactView';
import CreateContact from './containers/CreateContact';
import AdvertisersView from './containers/AdvertisersView';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={ContactView}/>
                    <Route path='/create' component={CreateContact}/>
                    <Route path='/advertisers' component={AdvertisersView}/>
                </Switch>
            </div>
        );
    }
}

export default App;

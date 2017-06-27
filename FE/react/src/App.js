import React, { Component } from 'react';
import './App.css';
import ContactView from './View/ContactView';
import HotelViewRest from './View/HotelViewRest';
import HotelViewGraphQL from './View/HotelViewGraphQL';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<HotelViewRest/>*/}
                <HotelViewGraphQL/>
                {/*<ContactView/>*/}
            </div>
        );
    }
}

export default App;

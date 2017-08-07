import React, { Component } from 'react';
import './App.css';
import User from "./View/User";
// import ContactView from './View/ContactView';
// import HotelViewRest from './View/HotelViewRest';
// import HotelViewGraphQL from './View/HotelViewGraphQL';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<HotelViewRest/>*/}
                {/*<HotelViewGraphQL/>*/}
                {/*<ContactView/>*/}
                <User/>
            </div>
        );
    }
}

export default App;

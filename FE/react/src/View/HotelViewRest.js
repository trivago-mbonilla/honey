import React, { Component } from 'react';
import InputGroup from '../Components/InputGroup/InputGroup';

class HotelViewRest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotels: null,
            newHotel: {
                name: ''
            }
        };

        this.fetchHotels = this.fetchHotels.bind(this);
        this.setHotels = this.setHotels.bind(this);
        this.addHotel = this.addHotel.bind(this);
    }

    addHotel() {
        let name = this.state.newHotel.name;

        fetch("http://127.0.0.1:8000/hotels/create/" + name)
            .then(response => response.json())
            .then(hotels => this.setHotels(hotels));
    }

    deleteHotel(id) {
        fetch("http://127.0.0.1:8000/hotels/delete/" + id)
            .then(response => response.json())
            .then(hotels => this.setHotels(hotels));
    }

    fetchHotels() {
        fetch("http://127.0.0.1:8000/hotels")
            .then(response => response.json())
            .then(hotels => this.setHotels(hotels));
    }

    setHotels(hotels) {
        this.setState({hotels : hotels});
    }

    // method lifecycle where should be the fetch data
    componentDidMount() {
       this.fetchHotels();
    }

    setInputChange(event, type) {
        let newHotel = Object.assign({}, this.state.newHotel);
        newHotel[type] = event.target.value;
        this.setState({newHotel : newHotel});
    }

    render() {
        const { hotels } = this.state;
        if (!hotels) { return null; }

        return (
            <div>
                <form onSubmit={this.addHotel}>
                    <label>Name</label>
                    <InputGroup
                        name="name"
                        value={ this.state.newHotel.name }
                        onChange={(event) => this.setInputChange(event, 'name')} />
                    <button type="submit">Add Hotel</button>
                </form>

                <h1>All hotels</h1>
                { hotels.map(hotel =>
                    <div key={hotel.id}>{ hotel.id }: { hotel.name }
                        <button type="button" onClick={() => this.deleteHotel(hotel.id)}>X</button>
                    </div>
                ) }
            </div>
        );
    }
}

export default HotelViewRest;
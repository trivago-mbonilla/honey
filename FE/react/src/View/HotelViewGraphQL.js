import React, { Component } from 'react';
import InputGroup from '../Components/InputGroup/InputGroup';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://127.0.0.1:8000/graphql',
    }),
});

class HotelViewGraphQL extends Component {
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

    addHotel(event) {
        event.preventDefault();
        debugger;
        let name = this.state.newHotel.name;

        client.mutate({
            mutation: gql`
    mutation addHotel($name: String!){
      addHotel(name: $name) {
        id
        name
      }
    }
  `,
            variables: {
                name: name,
            },
        })
            .then(response => response.data.hotels)
            .then(hotels => this.setHotels(hotels))
            .catch((error) => {
                console.log('there was an error sending the query', error);
            });
    }

    deleteHotel(id) {
        fetch("http://127.0.0.1:8000/hotels/delete/" + id)
            .then(response => response.json())
            .then(hotels => this.setHotels(hotels));
    }

    fetchHotels() {
        client.query({
            query: gql`
query {
  hotels {
    id,
    name
  }
}
  `,
        })            .then(response => response.data.hotels)
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

export default HotelViewGraphQL;
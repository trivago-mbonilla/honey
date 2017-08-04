import React, { Component } from 'react';
import InputGroup from '../InputGroup/InputGroup';

class CreateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newContact : {
                id: '',
                name: '',
                lastName: '',
                phone: ''
            }
        };

        this.setInputChange = this.setInputChange.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    saveContact(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.newContact);
    }

    setInputChange(event, type) {
        let newContact = Object.assign({}, this.state.newContact);
        newContact[type] = event.target.value;
        this.setState({newContact : newContact});
    }

    render() {
        const newContact = this.state.newContact;

        return (
            <div>
                <h1>Create Contact</h1>
                <form onSubmit={this.saveContact}>
                    <InputGroup
                        name="name"
                        value={newContact.name}
                        onChange={(event) => this.setInputChange(event, 'name')} />
                    <InputGroup
                        name="lastName"
                        value={newContact.lastName}
                        onChange={(event) => this.setInputChange(event, 'lastName')} />
                    <InputGroup
                        name="phone"
                        value={newContact.phone}
                        onChange={(event) => this.setInputChange(event, 'phone')} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CreateContact;
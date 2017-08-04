import React, { Component } from 'react';
import ContactInfo from '../Components/ContactInfo/ContactInfo';
import CreateContact from '../Components/CreateContact/CreateContact';
import PropTypes from 'prop-types';

class ContactView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCreateContact: false,
            contacts: null
        };

        this.showCreateContact = this.showCreateContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.fetchContacts = this.fetchContacts.bind(this);
        this.setContacts = this.setContacts.bind(this);
        this.saveContact = this.saveContact.bind(this);
    }

    showCreateContact() {
        this.setState({showCreateContact: true});
    }

    deleteContact(id) {
        // passing the id, then getting the integer
        const updatedContact = this.state.contacts.filter(contact => contact.id !== id);
        this.setState({contacts : updatedContact});
    }

    saveContact(newContact) {
        newContact.id = Math.floor(Math.random() * 100);
        const updatedContacts = [...this.state.contacts, newContact];
        this.setState({contacts : updatedContacts});
        this.setState({showCreateContact: false});
    }

    fetchContacts() {
        fetch("http://localhost:3004/contacts")
            .then(response => response.json())
            .then(contacts => this.setContacts(contacts));
    }

    setContacts(contacts) {
        this.setState({contacts : contacts});
    }

    // method lifecicle where should be the fetch data
    componentDidMount() {
       this.fetchContacts();
    }

    render() {
        const {showCreateContact, contacts, newContact} = this.state;

        if (!contacts) { return null; }

        return (
            <div>
                <h1>All contacts</h1>
                { contacts.map(contact =>
                    <ContactInfo
                        key={contact.id}
                        contact={contact}
                        onClick={() => this.deleteContact(contact.id)} // two ways to create functions
                    />
                ) }

                <button
                    onClick={this.showCreateContact} // two ways to create functions
                    type="button"
                >Create contact</button>

                { showCreateContact
                && <CreateContact
                    newContact={newContact}
                    onSubmit={this.saveContact}
                />}
            </div>
        );
    }
}

ContactView.propTypes = {
    showCreateContact: PropTypes.bool,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.number
        })
    )
};

export default ContactView;
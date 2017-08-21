import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import CreateContact from '../components/CreateContact/CreateContact';
import { addContact, removeContact, showCreateContact, fetchContactsIfNeeded } from '../actions/index';

class ContactViewContainer extends Component {

    componentDidMount() {
        const { fetchContacts } = this.props;
        fetchContacts();
    }

    render() {
        const {contacts, showCreateContact, deleteContact, saveContact, toogleShowCreateContact} = this.props;
        let newContact = [];

        if (!contacts) { return null; }

        return (
            <div>
                <h1>All contacts</h1>
                { contacts.map(contact =>
                    <ContactInfo
                        key={contact.id}
                        contact={contact}
                        onClick={() => deleteContact(contact.id)} // two ways to create functions
                    />
                ) }

                <button
                    onClick={() => toogleShowCreateContact(showCreateContact)}
                    type="button"
                >Create contact</button>

                { showCreateContact
                && <CreateContact
                    newContact={newContact}
                    onSubmit={saveContact} // two ways to create functions
                />}
            </div>
        );
    }
}

ContactViewContainer.propTypes = {
    showCreateContact: PropTypes.bool,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.number
        })
    ),
    deleteContact: PropTypes.func.isRequired,
    saveContact: PropTypes.func.isRequired,
    toogleShowCreateContact: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => ({
    contacts: state.contacts,
    showCreateContact: state.showCreateContact
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: id => {
            dispatch(removeContact(id))
        },
        saveContact: newContact => {
            dispatch(addContact(newContact))
        },
        toogleShowCreateContact: isShown => {
            dispatch(showCreateContact(!isShown))
        },
        fetchContacts: () => {
            dispatch(fetchContactsIfNeeded())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactViewContainer);

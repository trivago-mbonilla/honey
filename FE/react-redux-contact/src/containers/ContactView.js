import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactInfo from '../components/ContactInfo/ContactInfo';
import { removeContact, fetchContactsIfNeeded } from '../actions/index';
import { Link } from 'react-router-dom';

class ContactView extends Component {

    componentDidMount() {
        const { fetchContacts } = this.props;
        fetchContacts();
    }

    render() {
        const {contacts, deleteContact} = this.props;

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
                <Link to='/create'>Create contact</Link>
            </div>
        );
    }
}

ContactView.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.number
        })
    ),
    deleteContact: PropTypes.func.isRequired
};


const mapStateToProps = (state, ownProps) => ({
    contacts: state.contacts
});

const mapDispatchToProps = (dispatch) => {
    return {
        deleteContact: id => {
            dispatch(removeContact(id))
        },
        fetchContacts: () => {
            dispatch(fetchContactsIfNeeded())
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactView);

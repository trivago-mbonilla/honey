import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import CreateContact from '../CreateContact/CreateContact';
import PropTypes from 'prop-types';


const ContactView = ({contacts, showCreateContact, deleteContact, saveContact, toogleShowCreateContact}) => {
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
};

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
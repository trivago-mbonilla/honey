import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({contact, onClick}) =>
    <div>
        <p>
            {contact.name} {contact.lastName} {contact.phone}
        </p>
        <button
            onClick={onClick}
            type="button"
        >Delete contact</button>
        <hr />
    </div>;

ContactInfo.propTypes = {
    contact: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ContactInfo;
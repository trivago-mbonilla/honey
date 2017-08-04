import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({contact, onClick}) =>
    <div>
        <p>
            {contact.name} {contact.lastName} {contact.phone}
            <button
                onClick={onClick}
                type="button"
            >Delete contact</button>
        </p>
        <hr />
    </div>;

ContactInfo.propTypes = {
    contact: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ContactInfo;
import React from 'react';
import PropTypes from 'prop-types';

const InputGroup = ({ name, value, onChange}) =>
    <div>
        <label>{name}</label>
        <input
            name={name}
            value={value}
            type="text"
            onChange={onChange}
        />
    </div>;

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default InputGroup;
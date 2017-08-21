import React, { Component } from 'react';
import InputGroup from '../components/InputGroup/InputGroup';
import { addContact, updateFormNewContact, setIsContactSaved } from '../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class CreateContact extends Component {
    constructor(props) {
        super(props);
        const { setIsContactSaved } = this.props;
        setIsContactSaved(false);
    }

    render() {
        let { newContact } = this.props;
        const { updateForm, saveContact, isContactSaved } = this.props;

        if (true === isContactSaved) {
            return <Redirect to='/'/>;
        }

        return (
            <div>
                <h1>Create Contact</h1>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    saveContact(newContact)}
                }>
                    <InputGroup
                        name="name"
                        value={newContact.name}
                        onChange={(event) => updateForm(event.target.value, 'name')} />
                    <InputGroup
                        name="lastName"
                        value={newContact.lastName}
                        onChange={(event) => updateForm(event.target.value, 'lastName')} />
                    <InputGroup
                        name="phone"
                        value={newContact.phone}
                        onChange={(event) => updateForm(event.target.value, 'phone')} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    newContact: state.newContact,
    isContactSaved: state.isContactSaved
});

const mapDispatchToProps = (dispatch) => {
    return {
        saveContact: (newContact) => {
            dispatch(addContact(newContact));
            dispatch(setIsContactSaved(true));
        },
        updateForm: (newValue, field) => {
            dispatch(updateFormNewContact(newValue, field))
        },
        setIsContactSaved: (isContactSaved) => {
            dispatch(setIsContactSaved(isContactSaved));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateContact);

import { connect } from 'react-redux';
import ContactView from '../components/ContactView/ContactView';
import { addContact, removeContact, showCreateContact } from '../actions/index';


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
        }
    }
};

const ContactViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactView);

export default ContactViewContainer;
import PropTypes from 'prop-types';
import { Button } from '../ContactList/ContactList.styled';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <Button onClick={() => onDeleteContact(contact.id)} type="button">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
}

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const findContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: findContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: name => dispatch(actions.removeItem(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  //   onDeleteContact: PropTypes.func.isRequired,
};

//export default ContactList;

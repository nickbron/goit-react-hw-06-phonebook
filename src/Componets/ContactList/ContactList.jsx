import PropTypes from 'prop-types';
import { Button } from '../ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';

export default function ContactList() {
  const { contacts } = useSelector(state => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    const findContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return {
      contacts: findContacts,
    };
  });

  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}:</span>
              <span>{contact.number}</span>
              <Button
                onClick={() => dispatch(actions.removeItem(contact.id))}
                type="button"
              >
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

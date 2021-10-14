import { Button, Input, Form } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';

const handleSubmit = (e, contacts, dispatch) => {
  e.preventDefault();
  const { name, number } = e.target;
  console.log('contacts', contacts);

  if (
    contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase(),
    )
  ) {
    alert(`Attention ${name.value} is already in contacts.`);
    return;
  }

  dispatch(actions.addItem(name.value, number.value));

  name.value = '';
  number.value = '';
};

export default function ContactForm() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <div>
      <Form onSubmit={e => handleSubmit(e, contacts, dispatch)}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
}

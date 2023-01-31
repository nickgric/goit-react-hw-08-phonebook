import { useState } from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelectors';

import { Box } from '@mui/system';
import { Button, TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const AddContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitHandler = event => {
    event.preventDefault();

    const id = nanoid();

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts!`);
    }

    dispatch(addContact({ name, number, id }));

    event.target.reset();
  };

  const inputHandler = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Box component="form" onSubmit={submitHandler}>
      <TextField
        sx={{ marginBottom: '16px' }}
        label="Name"
        variant="outlined"
        onInput={inputHandler}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan!"
        required
        fullWidth={true}
      />
      <TextField
        sx={{ marginBottom: '16px' }}
        label="Number"
        variant="outlined"
        onInput={inputHandler}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!"
        required
        fullWidth={true}
      />
      <Button variant="outlined" type="submit">
        Add contact
      </Button>
    </Box>
  );
};

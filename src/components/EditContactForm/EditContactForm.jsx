import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/contacts/contactsSelectors';

import { selectEdit } from 'redux/contacts/contactsSelectors';
import { editContact } from 'redux/contacts/contactsOperations';

import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';

export const EditContactForm = ({ setForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const editedContact = useSelector(selectEdit);

  useEffect(() => {
    setName(editedContact.name);
    setNumber(editedContact.number);
  }, [editedContact]);

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitHandler = event => {
    event.preventDefault();

    if (
      contacts.find(contact => contact.name === name) &&
      editedContact.name !== name
    ) {
      return alert(`${name} is already in contacts!`);
    }

    setForm(false);
    dispatch(editContact({ id: editedContact.id, name, number }));
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
      <Box>
        <TextField
          sx={{ marginBottom: '16px' }}
          value={name}
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
          value={number}
          variant="outlined"
          onInput={inputHandler}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +!"
          required
          fullWidth={true}
        />
      </Box>
      <Button variant="outlined" type="submit">
        Save edits
      </Button>
      <Button variant="outlined" type="button" onClick={() => setForm(false)}>
        Close
      </Button>
    </Box>
  );
};

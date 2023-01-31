import { ThreeDots } from 'react-loader-spinner';

import { deleteContact } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectLoading,
} from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { ContactsItem } from 'components/ContactsItem';

import { fetchContacts } from 'redux/contacts/contactsOperations';
import { selectFilter } from 'redux/filter/filterSelectors';
import { editedContactSaver } from 'redux/contacts/contactsSlice';

import { List, Typography } from '@mui/material';

export const ContactsList = ({ setForm }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteHandler = ({ target: { name } }) => {
    const id = name;
    dispatch(deleteContact(id));
  };

  const editHandler = ({ target: { name } }) => {
    const id = name;
    const contact = contacts.find(contact => contact.id === id);
    dispatch(editedContactSaver(contact));
    setForm(true);
  };

  return (
    <>
      <List>
        {filteredContacts()
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(contact => (
            <ContactsItem
              key={contact.id}
              contact={contact}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))}
      </List>
      {contacts.length > 0 && (
        <Typography variant="body2">
          Sorted by <b>name</b>
        </Typography>
      )}
      {loading && <ThreeDots height={60} color="#1976D2" />}
    </>
  );
};

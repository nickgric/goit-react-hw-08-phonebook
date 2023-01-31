import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

import { TextField } from '@mui/material';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const filterHandler = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };

  return (
    <TextField
      sx={{ marginBottom: '16px' }}
      label="Find contacts by name"
      variant="outlined"
      onInput={filterHandler}
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan!"
      fullWidth={true}
    />
  );
};

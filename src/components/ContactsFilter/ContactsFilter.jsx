import { changeFilter } from 'redux/filter/filterSlice';
import { useDispatch } from 'react-redux';

export const ContactsFilter = () => {
  const dispatch = useDispatch();

  const filterHandler = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };

  return (
    <>
      <p>
        Find contacts by <b>name:</b>
      </p>
      <input
        onInput={filterHandler}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contactsOperations';

const initialState = {
  contacts: [],
  contactsLoading: false,
  contactsError: null,
  editedContact: { name: '', number: '', id: '' },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    editedContactSaver: (state, { payload }) => {
      state.editedContact = payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload
        );
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.contacts = [...state.contacts, payload];
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending,
          editContact.pending
        ),
        state => {
          state.contactsLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          fetchContacts.rejected,
          addContact.fulfilled,
          addContact.rejected,
          deleteContact.fulfilled,
          deleteContact.rejected,
          editContact.fulfilled,
          editContact.rejected
        ),
        state => {
          state.contactsLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected,
          editContact.rejected
        ),
        (state, { payload }) => {
          state.contactsError = payload;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { editedContactSaver } = contactsSlice.actions;

import { createReducer, on } from '@ngrx/store';
import { Contact } from './contacts.state';
import { addContact, updateContact, deleteContact } from './contacts.actions';

export const contactsReducer = createReducer<Contact[]>(
  [],
  on(addContact, (state, contact) => [...state, contact]),
  on(updateContact, (state, updatedContact) =>
    state.map(contact => contact.id === updatedContact.id ? updatedContact : contact)
  ),
  on(deleteContact, (state, { id }) => state.filter(contact => contact.id !== id))
);

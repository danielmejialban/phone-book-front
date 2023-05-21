import { createReducer, on } from '@ngrx/store';
import { Contact } from '../types/contact.type';
import * as ContactsActions from './contacts.actions';

export interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

export const initialState: ContactsState = {
  contacts: [],
  loading: false,
  error: null
};

export const contactsReducer = createReducer<ContactsState>(
  initialState,

  on(ContactsActions.loadContacts, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ContactsActions.loadContactsSuccess, (state, { contacts }) => ({
    ...state,
    contacts,
    loading: false,
    error: null
  })),
  on(ContactsActions.loadContactsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(ContactsActions.addContact, (state, { contact }) => ({
    ...state,
    contacts: [...state.contacts, contact]
  })),
  on(ContactsActions.addContactSuccess, (state, { contact }) =>
  ({ ...state, contacts: [...state.contacts, contact] })),
  on(ContactsActions.addContactFailure, (state, { error }) => ({ ...state, error })),

  
  on(ContactsActions.updateContact, (state, { contact }) => ({
    ...state,
    contacts: state.contacts.map(c => (c.id === contact.id ? contact : c))
  })),
  on(ContactsActions.deleteContact, (state, { id }) => ({
    ...state,
    contacts: state.contacts.filter(c => c.id !== id)
  }))
);

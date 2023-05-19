import { createAction, props } from '@ngrx/store';
import { Contact } from './contacts.state';

export const loadContacts = createAction('[Contacts] Load Contacts');

export const addContact = createAction('[Contacts] Add Contact', props<{ contact: Contact }>());
export const updateContact = createAction('[Contacts] Update Contact', props<{ contact: Contact }>());
export const deleteContact = createAction('[Contacts] Delete Contact', props<{ contact: Contact }>());
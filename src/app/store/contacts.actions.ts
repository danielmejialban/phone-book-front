import { createAction, props } from '@ngrx/store';
import { Contact } from '../types/contact.type';

export const loadContacts = createAction('[Contacts] Load Contacts');
export const loadContactsSuccess = createAction('[Contacts] Load Contacts Success', props<{ contacts: Contact[] }>());
export const loadContactsFailure = createAction('[Contacts] Load Contacts Failure', props<{ error: string }>());

export const addContact = createAction('[Contacts] Add Contact', props<{ contact: Contact }>());
export const updateContact = createAction('[Contacts] Update Contact', props<{ contact: Contact }>());
export const deleteContact = createAction('[Contacts] Delete Contact', props<{ id: number| undefined }>());

import { createAction, props } from '@ngrx/store';
import { Contact } from '../types/contact.type';

export const loadContacts = createAction('[Contacts] Load Contacts');
export const loadContactsSuccess = createAction('[Contacts] Load Contacts Success', props<{ contacts: Contact[] }>());
export const loadContactsFailure = createAction('[Contacts] Load Contacts Failure', props<{ error: string }>());

export const addContact = createAction('[Contacts] Add Contact', props<{ contact: Contact }>());
export const addContactSuccess = createAction('[Contacts] Add Contact Success', props<{ contact: Contact }>());
export const addContactFailure = createAction('[Contacts] Add Contact Failure', props<{ error: string }>());

export const updateContact = createAction('[Contacts] Update Contact', props<{ id: number , contact: Contact }>());
export const updateContactSuccess = createAction('[Contacts] Update Contact Success', props<{ contact: Contact }>());
export const updateContactFailure = createAction('[Contacts] Update Contact Failure', props<{ error: string }>());

export const deleteContact = createAction('[Contacts] Delete Contact', props<{ id?: number}>());
export const deleteContactSuccess = createAction('[Contacts] Delete Contact Success', props<{ id?: number }>());
export const deleteContactFailure = createAction('[Contacts] Delete Contact Failure', props<{ error: string }>());




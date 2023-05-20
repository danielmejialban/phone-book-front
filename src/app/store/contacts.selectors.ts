import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ContactsState } from './contacts.reducer';

// Obtener el estado de los contactos
export const selectContactsState = createFeatureSelector<ContactsState>('contacts');

// Obtener la lista de contactos
export const selectAllContacts = createSelector(
  selectContactsState,
  (state: ContactsState) => state.contacts
);

// Obtener el estado de carga
export const selectContactsLoading = createSelector(
  selectContactsState,
  (state: ContactsState) => state.loading
);

// Obtener el error
export const selectContactsError = createSelector(
  selectContactsState,
  (state: ContactsState) => state.error
);

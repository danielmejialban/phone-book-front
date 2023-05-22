import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ContactsService } from '../services/contacts.service';
import {
  loadContacts,
  loadContactsSuccess,
  loadContactsFailure,
  addContact,
  addContactSuccess,
  addContactFailure,
  updateContact,
  updateContactSuccess,
  updateContactFailure,
  deleteContact,
  deleteContactSuccess,
  deleteContactFailure
} from './contacts.actions';

@Injectable()
export class ContactsEffects {
  constructor(private readonly actions$: Actions, private readonly contactsService: ContactsService) {}

  loadContacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadContacts),
      switchMap(() =>
        this.contactsService.getContacts().pipe(
          map(contacts => loadContactsSuccess({ contacts })),
          catchError(error => of(loadContactsFailure({ error })))
        )
      )
    )
  );

  addContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addContact),
      switchMap(action =>
        this.contactsService.addContact(action.contact).pipe(
          map(contact => addContactSuccess({ contact })),
          catchError(error => of(addContactFailure({ error })))
        )
      )
    )
  );

  updateContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateContact),
      switchMap(action =>
        this.contactsService.updateContact(action.contact).pipe(
          map(contact => updateContactSuccess({ contact })),
          catchError(error => of(updateContactFailure({ error })))
        )
      )
    )
  );

  deleteContact$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContact),
      switchMap(action =>
        this.contactsService.deleteContact(action.id).pipe(
          map(() => deleteContactSuccess({ id: action.id })),
          catchError(error => of(deleteContactFailure({ error })))
        )
      )
    )
  );
}

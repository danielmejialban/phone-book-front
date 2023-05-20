import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../types/contact.type'; 
import { loadContacts, deleteContact } from '../../store/contacts.actions';
import { selectAllContacts, selectContactsLoading, selectContactsError } from 'src/app/store/contacts.selectors';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts$: Observable<Contact[]>;
  loading$: Observable<boolean>;
  error$: Observable<string| null>;

  constructor(private store: Store) {
    this.contacts$ = this.store.pipe(select(selectAllContacts));
    this.loading$ = this.store.pipe(select(selectContactsLoading));
    this.error$ = this.store.pipe(select(selectContactsError));
  }

  ngOnInit(): void {
    this.store.dispatch(loadContacts());
  }

  deleteContact(id: number|undefined): void {
    this.store.dispatch(deleteContact({ id }));
  }
}

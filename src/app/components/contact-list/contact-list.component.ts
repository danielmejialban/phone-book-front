import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../types/contact.type'; 
import { deleteContact , loadContacts} from '../../store/contacts.actions';
import { selectAllContacts, selectContactsLoading, selectContactsError } from 'src/app/store/contacts.selectors';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddContactModalComponent } from 'src/app/modals/add-contact-modal/add-contact-modal.component';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public contacts$: Observable<Contact[]> = this.store.select(selectAllContacts);
  public loading$: Observable<boolean> = this.store.select(selectContactsLoading);
  public error$: Observable<string| null> = this.store.select(selectContactsError);

  constructor(private readonly store: Store,
              private readonly modalService: NgbModal ) {  }

  ngOnInit(): void {
    this.store.dispatch(loadContacts());
  }

  public openModal(): void {
    this.modalService.open(AddContactModalComponent, {ariaLabelledBy: 'modal-basic-title'});
  }

  public deleteContact(id?: number): void {
    this.store.dispatch(deleteContact({ id }));
  }
}

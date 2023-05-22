import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact } from '../../types/contact.type'; 
import { deleteContact , loadContacts, updateContact} from '../../store/contacts.actions';
import { selectAllContacts, selectContactsLoading, selectContactsError } from 'src/app/store/contacts.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AddContactModalComponent } from 'src/app/modals/add-contact-modal/add-contact-modal.component';
import { EditContactModalComponent } from 'src/app/modals/edit-contact-modal/edit-contact-modal/edit-contact-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
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
              private readonly dialog: MatDialog, 
              private readonly snackBar: MatSnackBar) {  }

  ngOnInit(): void {
    this.store.dispatch(loadContacts());
  }

  public openModal(): void {
    this.dialog.open(AddContactModalComponent, {
      width: '300px',
    });
  }

  public openModalEdit(contact: Contact): void {
    const modalRef = this.dialog.open(EditContactModalComponent, {
      data: {contact: contact }
    });

   modalRef.afterClosed().subscribe( result => {
    if(result === 'success') {
      this.snackBar.open('Contact updated successfully', 'Close', {
        duration: 3000
      });
    }
    });
  }
 
  public deleteContact(id?: number): void {
    this.store.dispatch(deleteContact({ id }));
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addContact } from '../../store/contacts.actions';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  firstName: string = '';
  lastName: string = '';
  phoneNumber: string = '';

  constructor(private store: Store) {}

  onSubmit(): void {
    const contact = {
      
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber
    };
    this.store.dispatch(addContact({ contact }));

    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
  }
}

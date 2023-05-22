import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addContact } from '../../store/contacts.actions';
import { Contact } from '../../types/contact.type';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss']
})
export class AddContactModalComponent  {

  public contactForm: FormGroup;

  constructor(private store: Store, 
              private readonly formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<AddContactModalComponent>) {
      this.contactForm = this.instantiaceForm(this.formBuilder);
  }

  instantiaceForm(builder: FormBuilder): FormGroup {
    return builder.group({  
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required)
    });
  }
  
  onSubmit(): void {
    const contact: Contact = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      phoneNumber: this.contactForm.value.phoneNumber
    };
    this.store.dispatch(addContact({ contact }));
    this.dialogRef.close();
  }

}

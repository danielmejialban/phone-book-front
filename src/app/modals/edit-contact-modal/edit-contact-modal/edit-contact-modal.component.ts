import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Contact } from 'src/app/types/contact.type';
import { updateContact } from 'src/app/store/contacts.actions';


@Component({
  selector: 'app-edit-contact-modal',
  templateUrl: './edit-contact-modal.component.html',
  styleUrls: ['./edit-contact-modal.component.scss']
})
export class EditContactModalComponent {

  public contactForm: FormGroup;

  constructor(private store: Store, 
              private readonly formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<EditContactModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.contactForm = this.instantiaceForm(this.formBuilder);
  }

  instantiaceForm(builder: FormBuilder): FormGroup {
    return builder.group({  
      firstName: new FormControl(this.data.contact.firstName, Validators.required),
      lastName: new FormControl(this.data.contact.lastName, Validators.required),
      phoneNumber: new FormControl(this.data.contact.phoneNumber, Validators.required)
    });
  }
  
  onSubmit(): void {
    const contact: Contact = {
      id: this.data.contact.id,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      phoneNumber: this.contactForm.value.phoneNumber
    };
    console.log(contact);
    this.store.dispatch(updateContact({ contact }));
    this.contactForm.reset();
    this.dialogRef.close('success');
  }
}

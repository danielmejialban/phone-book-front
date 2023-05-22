import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { contactsReducer } from './store/contacts.reducer';


import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './store/contacts.effects';
import { AddContactModalComponent } from './modals/add-contact-modal/add-contact-modal.component';

import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContactModalComponent } from './modals/edit-contact-modal/edit-contact-modal/edit-contact-modal.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactModalComponent,
    EditContactModalComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([ContactsEffects]),
    StoreModule.forRoot({ contacts: contactsReducer }),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

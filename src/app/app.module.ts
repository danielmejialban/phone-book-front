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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddContactModalComponent } from './modals/add-contact-modal/add-contact-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    AddContactModalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    EffectsModule.forRoot([ContactsEffects]),
    StoreModule.forRoot({ contacts: contactsReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { contactsReducer } from './store/contacts.reducer';
import { initialContactsState } from './store/contacts.state';


import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contacts: contactsReducer }, { initialState: { contacts: initialContactsState } })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

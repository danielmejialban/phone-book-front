import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../types/contact.type';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private readonly urlBase: string = 'http://localhost:8080/contacts';

  constructor(private readonly http: HttpClient  ) { }

  public getContacts() : Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.urlBase}/getAll`);
  }

  //TODO: implement getContactById
  public getContactById(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.urlBase}/${id}`);
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${this.urlBase}/add`, contact);
  }

  public deleteContact(id: number|undefined): Observable<Contact> {
    return this.http.delete<Contact>(`${this.urlBase}/${id}`);
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.urlBase}/${contact.id}`, contact);
  }

}

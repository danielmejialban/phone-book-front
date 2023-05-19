export interface Contact {
    id: number; 
    firstName: string;
    lastName: string;
    phoneNumber: string;
}


export interface ContactsState  {
 contacts: Contact[];
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact";
import { CONTACTS_DTO } from "../../donnee/contact";
import { ContactReadApplicatifServiceACI } from ".";

@Injectable()
export class ContactReadApplicatifMockService implements ContactReadApplicatifServiceACI {

    constructor() { }

    getContact(contactId: number): Observable<any> {        
        return Observable.of<ContactDto[]>(CONTACTS_DTO).map(contacts => contacts.find(ct => ct.id === contactId));
    }
    getContacts(params: any): Observable<any> {
        return Observable.of<ContactDto[]>(CONTACTS_DTO);
    }   

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDo } from "../../donnee/contact";
import { CONTACTS_DO } from "../../donnee/contact";

import { ContactReadMetierServiceACI } from ".";

@Injectable()
export class ContactReadMetierMockService implements ContactReadMetierServiceACI {

    constructor() { }

    getContact(contactId: number): Observable<any> {        
        return Observable.of<ContactDo[]>(CONTACTS_DO).map(contacts => contacts.find(ct => ct.id === contactId));
    }
    getContacts(params: any): Observable<any> {
        return Observable.of<ContactDo[]>(CONTACTS_DO);
    }   

}

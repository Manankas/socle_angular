import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDo } from "../../donnee/contact";
import { CONTACTS_DO } from "../../donnee/contact";

import { ContactReadBusinessDelegateServiceACI } from ".";

@Injectable()
export class ContactReadBusinessDelegateMockService implements ContactReadBusinessDelegateServiceACI {

    constructor() { }

    getContact(contactId: number): Observable<any> {        
        return Observable.of<ContactDo[]>(CONTACTS_DO).map(contacts => contacts.find(ct => ct.id === contactId));
    }
    getContacts(params: any): Observable<any> {
        return Observable.of<ContactDo[]>(CONTACTS_DO);
    }   

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactReadMetierServiceACI } from ".";
import { ContactReadBusinessDelegateServiceACI } from "../../service-business-delegate/contact";

@Injectable()
export class ContactReadMetierService implements ContactReadMetierServiceACI {

    constructor(private contactReadBusinessDelegateService: ContactReadBusinessDelegateServiceACI) { }

    getContact(contactId: number): Observable<any> {
        return this.contactReadBusinessDelegateService.getContact(contactId);
    }
    getContacts(params: any): Observable<any> {
        return this.contactReadBusinessDelegateService.getContacts(params);
    }   
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact";
import { ContactCudMetierServiceACI } from ".";
import { ContactCudBusinessDelegateServiceACI } from "../../service-business-delegate/contact";

@Injectable()
export class ContactCudMetierService implements ContactCudMetierServiceACI {

    constructor(private contactCudBusinessDelegateService: ContactCudBusinessDelegateServiceACI) { }

    createContact(contact: ContactDto): Observable<any> {
        return this.contactCudBusinessDelegateService.createContact(contact);
    }
    updateContact(contact: ContactDto): Observable<any> {
        return this.contactCudBusinessDelegateService.updateContact(contact);
    }
    deleteContact(contactId: number): Observable<any> {
        return this.contactCudBusinessDelegateService.deleteContact(contactId);
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact";
import { ContactCudApplicatifServiceACI } from ".";
import { ContactCudMetierServiceACI } from "../../service-metier/contact";

@Injectable()
export class ContactCudApplicatifService implements ContactCudApplicatifServiceACI {

    constructor(private contactCudMetierService: ContactCudMetierServiceACI) { }

    createContact(contact: ContactDto): Observable<any> {
        return this.contactCudMetierService.createContact(contact);
    }
    updateContact(contact: ContactDto): Observable<any> {
        return this.contactCudMetierService.updateContact(contact);
    }
    deleteContact(contactId: number): Observable<any> {
        return this.contactCudMetierService.deleteContact(contactId);
    }
}

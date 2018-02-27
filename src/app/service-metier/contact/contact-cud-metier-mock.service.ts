import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDto } from "../../donnee/contact";
import { ContactCudMetierServiceACI } from ".";

@Injectable()
export class ContactCudMetierMockService implements ContactCudMetierServiceACI {

    constructor() { }

    createContact(contact: ContactDto): Observable<any> {
        return Observable.of<boolean>(true);        
    }
    updateContact(contact: ContactDto): Observable<any> {
        return Observable.of<boolean>(true);
    }
    deleteContact(contactId: number): Observable<any> {
        return Observable.of<boolean>(true);
    }
}

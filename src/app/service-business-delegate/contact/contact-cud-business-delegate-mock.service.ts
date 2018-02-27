import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactCudBusinessDelegateServiceACI } from ".";

@Injectable()
export class ContactCudBusinessDelegateMockService implements ContactCudBusinessDelegateServiceACI {
    constructor() { }

    createContact(contact: any): Observable<any> {
        return Observable.of<boolean>(true);        
    }
    updateContact(contact: any): Observable<any> {
        return Observable.of<boolean>(true);
    }
    deleteContact(contactId: number): Observable<any> {
        return Observable.of<boolean>(true);
    }
}

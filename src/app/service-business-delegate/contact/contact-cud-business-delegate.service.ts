import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

import { ContactDto } from "../../donnee/contact";
import { ContactCudBusinessDelegateServiceACI } from ".";

@Injectable()
export class ContactCudBusinessDelegateService implements ContactCudBusinessDelegateServiceACI {

    constructor(private http: Http) {}
    private contactsUrl = 'api/contacts';       // URL to web API
    private headers = new Headers({'Content-Type': 'application/json'});           

    createContact(contact: any): Observable<any> {
        return this.http                   
                   .post(this.contactsUrl, JSON.stringify(contact), { headers: this.headers })
                   .map(res => res.json().data);
    }
    updateContact(contact: ContactDto): Observable<any> {
        return this.http                   
                   .put(this.contactsUrl, JSON.stringify(contact), { headers: this.headers })
                   .map(res => res.json().data);
    }
    deleteContact(contactId: number): Observable<any> {
        return this.http        
                    .delete(this.contactsUrl, { headers: this.headers });        
    }
}

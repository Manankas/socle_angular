import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ContactReadBusinessDelegateServiceACI } from '.';

@Injectable()
export class ContactReadBusinessDelegateService implements ContactReadBusinessDelegateServiceACI {
    constructor(private http: Http) { }
    // tslint:disable-next-line:member-ordering
    private contactsUrl = 'api/contacts';       // URL to web API
    getContact(contactId: number): Observable<any> {
        // tslint:disable-next-line:prefer-const
        let params = new URLSearchParams();
        params.set('contactId', String(contactId));
        return this.http
                    .get(this.contactsUrl, { search: params })
                    .map((r: Response) => r.json().data);
    }
    getContacts(params: any): Observable<any> {
        // tslint:disable-next-line:prefer-const
        let contactParams = new URLSearchParams();
        // tslint:disable-next-line:prefer-const
        let keys = Object.keys(params);
        keys.forEach(key => {
            params.set(key, String(params[key]));
        });
        return this.http
                    .get(this.contactsUrl, { search: contactParams })
                    .map((r: Response) => r.json().data);
    }
}




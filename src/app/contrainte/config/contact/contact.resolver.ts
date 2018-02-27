import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ContactDto } from '../../../donnee/contact';
import { ContactReadApplicatifServiceACI } from '../../../service-applicatif/contact';

@Injectable()
export class ContactResolver implements Resolve<ContactDto[] | ContactDto> {
    constructor(private ContactReadApplicatifService: ContactReadApplicatifServiceACI) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ContactDto[] | ContactDto> {
        // If contactId param exists in current URL, return a single user, else return all contacts:
        if (route.params['contactId']) {
            console.log('contactId: ', +route.params['contactId']);
            return this.ContactReadApplicatifService.getContact(+route.params['contactId']);
        } else {
            return this.ContactReadApplicatifService.getContacts({});
        }
    }
}

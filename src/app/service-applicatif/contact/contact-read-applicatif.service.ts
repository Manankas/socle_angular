import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ContactDo } from '../../donnee/contact';
import { ContactDto } from '../../donnee/contact';
import { ContactReadApplicatifServiceACI } from '.';
import { ContactReadMetierServiceACI } from '../../service-metier/contact';
import { ContactFactoryService } from '../../contrainte/factory/contact';

@Injectable()
export class ContactReadApplicatifService implements ContactReadApplicatifServiceACI {

    constructor(
        private contactReadMetierService: ContactReadMetierServiceACI,
        private contactFactory: ContactFactoryService) { }

    getContact(contactId: number): Observable<any> {
        return this.contactReadMetierService.getContact(contactId);
    }
    getContacts(params: any): Observable<any> {
        // Transform contacts DO into DTO using observable 'map' and a factory:
        return this.contactReadMetierService.getContacts(params).map(contacts => this.contactFactory.contactsDtoFromDo(contacts));
    }
}



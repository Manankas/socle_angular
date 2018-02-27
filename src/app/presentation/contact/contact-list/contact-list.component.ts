import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ContactDto } from '../../../donnee/contact';
import { ContactReadApplicatifServiceACI } from '../../../service-applicatif/contact';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: [ './contact-list.component.css' ]
})
export class ContactListComponent implements OnInit {
    constructor(private contactReadApplicatifService: ContactReadApplicatifServiceACI) { }
    // tslint:disable-next-line:member-ordering
    contacts: ContactDto[];
    // tslint:disable-next-line:member-ordering
    contact: ContactDto;
    ngOnInit() {
        // tslint:disable-next-line:prefer-const
        let params = {};
        this.contactReadApplicatifService
            .getContacts(params)
            .do(contacts => console.log('Contacts: ', contacts))
            .subscribe(contacts => this.contacts = contacts);
    }
    select(contact: ContactDto) {
        this.contact = contact;
        console.log('selected contact: ', contact);
    }
}

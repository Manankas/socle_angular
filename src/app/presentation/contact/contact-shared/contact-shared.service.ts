import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';

import { ContactDto } from '../../../donnee/contact';

@Injectable()
export class ContactSharedService {
    constructor() { }
    // tslint:disable-next-line:member-ordering
    private contactSubject: BehaviorSubject<any> = new BehaviorSubject({});

    setContact(contact: ContactDto): void {
        this.contactSubject.next(contact);
    }
    getContact(): Observable<ContactDto> {
        return this.contactSubject.asObservable();
    }
}

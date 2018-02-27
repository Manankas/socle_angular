import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

import { ContactDto } from '../../../donnee/contact';
import { ContactSharedService  } from "../contact-shared";

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css' ]
})
export class ContactDetailComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private contactSharedService: ContactSharedService, private router: Router) { }
    contact: ContactDto;
    ngOnInit() {
        // Get contact detail from resolve:
        this.activatedRoute.data.subscribe(data => {           
            this.contact = data.contact;
        });
    }
    // Share data betwen component using a service:
    setContact(contact): void {
        this.contactSharedService.setContact(contact);
        this.router.navigate(['contact/edit', contact.id]);
    }
}

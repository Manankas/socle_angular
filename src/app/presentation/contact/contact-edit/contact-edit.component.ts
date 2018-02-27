import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ContactDto } from '../../../donnee/contact';
import { ContactSharedService } from "../contact-shared";
import { ContactCudApplicatifServiceACI } from "../../../service-applicatif/contact";

@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

    constructor(
        private contactSharedService: ContactSharedService, 
        private location: Location,
        private contactCudApplicatifService: ContactCudApplicatifServiceACI) { }
    contact: ContactDto;
    ngOnInit() {
        // use shared service and observable to pass data betwen components:
        this.contactSharedService.getContact().subscribe(contact => {
            this.contact = contact;
        });
    }

    saveContact(contact: ContactDto): void {
        this.contactCudApplicatifService.updateContact(contact).subscribe(res => {
            console.log("Contact saved successfully");
            this.location.back();    
        })
    }
    cancelEdit(): void  {
        this.location.back();
    }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components of the contact feature area:
import { ContactComponent } from "./contact-root";
import { ContactDetailComponent } from "./contact-detail";
import { ContactEditComponent } from './contact-edit';
import { ContactListComponent } from "./contact-list";
// Service available only for the contact feature area:
import { ContactSharedService } from "./contact-shared";
// Contact route module:
import { ContactRoutingModule } from "../../contrainte/config/contact/contact-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ContactRoutingModule
    ],
    declarations: [
        ContactComponent, 
        ContactDetailComponent,        
        ContactEditComponent,
        ContactListComponent        
    ],
    providers: [
        ContactSharedService
    ]
})
export class ContactPresentationModule { }
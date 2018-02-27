import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components:
import { ContactComponent } from '../../../presentation/contact/contact-root';
import { ContactListComponent } from '../../../presentation/contact/contact-list';
import { ContactDetailComponent } from '../../../presentation/contact/contact-detail';
import { ContactEditComponent } from '../../../presentation/contact/contact-edit';
// Route resolvers:
import { ContactResolver } from './contact.resolver';

const routes: Routes = [
    {
        path: 'contact',
        component: ContactComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ContactListComponent },
            { path: ':contactId', component: ContactDetailComponent, resolve: { contact: ContactResolver } },
            { path: 'edit/:contactId', component: ContactEditComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: [ ContactResolver ]
})
export class ContactRoutingModule { }

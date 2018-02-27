import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../../../presentation/_app';
// Modules présentation:
import { ContactPresentationModule } from "../../../presentation/contact";
// Module applicatif:
import { ApplicatifModule } from "../../../service-applicatif/applicatif.module";
// Module metier:
import { MetierModule } from "../../../service-metier/metier.module";
// Module business-delegate:
import { BusinessDelegateModule } from "../../../service-business-delegate/business-delegate.module";
// App routing module:
import { AppRoutingModule } from './app-routing.module';
// Shared pipes, directives, ...
import { AwesomePipe, HighlightDirective } from "../../../presentation/shared";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent, AwesomePipe, HighlightDirective ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        ContactPresentationModule,
        ApplicatifModule,
        MetierModule,
        BusinessDelegateModule
    ]
})
export class AppModule {
    constructor() { }
}

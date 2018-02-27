import { NgModule } from '@angular/core';

import { ContactApplicatifServiceProviders } from "./contact";
import { ContactFactoryService } from "../contrainte/factory/contact";

@NgModule({
    providers: [        
        ...ContactApplicatifServiceProviders,
        ContactFactoryService
    ]
})
export class ApplicatifModule { }

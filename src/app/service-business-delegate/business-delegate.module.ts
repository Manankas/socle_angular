import { NgModule } from '@angular/core';
import { ContactBusinessDelegateServiceProviders } from "./contact";

import { ContactBusinessDelegateMockServiceProviders } from "./contact";

@NgModule({
    providers: [
        //...ContactBusinessDelegateServiceProviders        // Uncomment when decide to switch to a real web API
        ...ContactBusinessDelegateMockServiceProviders      // Uncomment for using mock backend (In memory web api, Angular MockBackend, ...)
    ]
})
export class BusinessDelegateModule { }

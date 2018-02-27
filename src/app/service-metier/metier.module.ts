import { NgModule } from '@angular/core';
import { ContactMetierServiceProviders } from './contact';

@NgModule({
    providers: [
        ...ContactMetierServiceProviders
    ]
})
export class MetierModule { }

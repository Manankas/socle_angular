import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

const routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}

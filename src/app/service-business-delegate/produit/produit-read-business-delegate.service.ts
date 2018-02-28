import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ProduitReadBusinessDelegateServiceACI } from './produit-read-business-delegate.service.aci';

@Injectable()
export class ProduitReadBusinessDelegateService implements ProduitReadBusinessDelegateServiceACI {
    constructor(private http: Http) { }
    // tslint:disable-next-line:member-ordering
    private getAllProduitsUrl = 'produit/list';       // URL to web API
    getProduit(contactId: number): Observable<any> {
      return null;
    }
    getProduits(params: any): Observable<any> {
      return null;
    }
}




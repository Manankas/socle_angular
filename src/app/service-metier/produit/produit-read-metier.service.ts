import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProduitReadMetierServiceACI } from './produit-read-metier.service.aci';
import { ProduitReadBusinessDelegateServiceACI } from '../../service-business-delegate/produit/produit-read-business-delegate.service.aci';

@Injectable()
export class ProduitReadMetierService implements ProduitReadMetierServiceACI {

  constructor() {
  }

  public  getProduit(ProduitId: number) {

  }
  public  getProduits(params: any) {

  }
}

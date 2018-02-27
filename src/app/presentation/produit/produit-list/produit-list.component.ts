import { Component, OnInit } from '@angular/core';
import { ProduitDto } from '../../../donnee/produit/produit-dto';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
  produit: ProduitDto;
  produits: ProduitDto[];

  constructor() { }

  ngOnInit() {
  }

  select(produit: ProduitDto) {
    this.produit = produit;
    console.log('selected produit: ', produit);
}
}

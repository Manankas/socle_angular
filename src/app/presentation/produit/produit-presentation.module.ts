import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitListComponent } from './produit-list/produit-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProduitListComponent]  // ce component va faire partie de ce module (module = bolonganjavatra)
})
export class ProduitPresentationModule { }

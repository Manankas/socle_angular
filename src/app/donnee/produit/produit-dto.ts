export class ProduitDto {
     id: number;
     designation: String;
     prix: number;
     cat: String;


constructor(id: number, designation: String, prix: number, cat: String) {
  this.id = id;
  this.designation = designation;
  this.prix = prix;
  this.cat = cat;
}


}

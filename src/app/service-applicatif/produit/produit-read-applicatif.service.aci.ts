import { ProduitDto } from '../../donnee/produit/produit-dto';
export abstract class ContactReadApplicatifServiceACI {
    public abstract getProduit(ProduitId: number);
    public abstract getProduits(params: any);
}

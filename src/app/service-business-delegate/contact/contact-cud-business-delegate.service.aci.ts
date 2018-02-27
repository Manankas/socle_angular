import { ContactDto } from "../../donnee/contact";
export abstract class ContactCudBusinessDelegateServiceACI {
    public abstract createContact(contact: any);
    public abstract updateContact(contact: any);
    public abstract deleteContact(contactId: number);
}

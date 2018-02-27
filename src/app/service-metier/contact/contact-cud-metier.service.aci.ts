import { ContactDto } from "../../donnee/contact";
export abstract class ContactCudMetierServiceACI {
    public abstract createContact(contact: ContactDto);
    public abstract updateContact(contact: ContactDto);
    public abstract deleteContact(contactId: number);
}

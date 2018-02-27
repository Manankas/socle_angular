import { ContactDto } from "../../donnee/contact";
export abstract class ContactReadApplicatifServiceACI {
    public abstract getContact(contactId: number);
    public abstract getContacts(params: any);
}
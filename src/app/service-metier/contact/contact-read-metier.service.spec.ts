import { TestBed, inject } from '@angular/core/testing';

import { ContactReadMetierService } from './contact-read-metier.service';
import { ContactBusinessDelegateMockServiceProviders } from "../../service-business-delegate/contact/contact-business-delegate.service.provider";

describe('ContactReadApplicatifService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ContactReadMetierService,
                ...ContactBusinessDelegateMockServiceProviders
            ]
        });
    });

    it('should create', inject([ContactReadMetierService], (service: ContactReadMetierService) => {
        expect(service).toBeTruthy();
    }));
});

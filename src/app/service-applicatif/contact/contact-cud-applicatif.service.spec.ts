import { TestBed, inject } from '@angular/core/testing';

import { ContactCudApplicatifService } from './contact-cud-applicatif.service';
import { ContactMetierMockServiceProviders } from "../../service-metier/contact/contact-metier.service.provider";

describe('ContactCudApplicatifService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ContactCudApplicatifService,
                ...ContactMetierMockServiceProviders
            ]
        });
    });

    it('should create', inject([ContactCudApplicatifService], (service: ContactCudApplicatifService) => {
        expect(service).toBeTruthy();
    }));
});

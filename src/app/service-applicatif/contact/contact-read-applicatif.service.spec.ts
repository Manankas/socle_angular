import { TestBed, inject } from '@angular/core/testing';

import { ContactReadApplicatifService } from './contact-read-applicatif.service';
import { ContactMetierMockServiceProviders } from "../../service-metier/contact/contact-metier.service.provider";
import { ContactFactoryService } from "../../contrainte/factory/contact";

describe('ContactReadApplicatifService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ContactReadApplicatifService,
                ContactFactoryService,
                ...ContactMetierMockServiceProviders
            ]
        });
    });

    it('should create', inject([ContactReadApplicatifService], (service: ContactReadApplicatifService) => {
        expect(service).toBeTruthy();
    }));
});

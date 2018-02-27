import { TestBed, inject } from '@angular/core/testing';

import { ContactCudMetierService } from './contact-cud-metier.service';
import { ContactBusinessDelegateMockServiceProviders } from "../../service-business-delegate/contact/contact-business-delegate.service.provider";

describe('ContactCudMetierService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ 
                ContactCudMetierService,
                ...ContactBusinessDelegateMockServiceProviders
            ]
        });
    });

    it('should create', inject([ ContactCudMetierService ], (service: ContactCudMetierService) => {
        expect(service).toBeTruthy();
    }));
});

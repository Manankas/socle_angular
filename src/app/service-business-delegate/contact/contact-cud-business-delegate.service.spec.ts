import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ContactCudBusinessDelegateService } from './contact-cud-business-delegate.service';

describe('ContactCudBusinessDelegateService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [ ContactCudBusinessDelegateService ]
        });
    });
    it('should create', inject([ ContactCudBusinessDelegateService ], (service: ContactCudBusinessDelegateService) => {
        expect(service).toBeTruthy();
    }));
});

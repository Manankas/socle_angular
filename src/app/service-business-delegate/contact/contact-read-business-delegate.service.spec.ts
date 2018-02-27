import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ContactReadBusinessDelegateService } from './contact-read-business-delegate.service';

describe('ContactReadApplicatifService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [ ContactReadBusinessDelegateService ]
        });
    });
    it('should create', inject([ ContactReadBusinessDelegateService ], (service: ContactReadBusinessDelegateService) => {
        expect(service).toBeTruthy();
    }));
});

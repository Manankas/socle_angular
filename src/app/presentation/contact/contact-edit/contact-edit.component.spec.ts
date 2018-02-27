import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

import { CONTACTS_DO } from "../../../donnee/contact";
import { ContactDo } from "../../../donnee/contact";
import { ContactEditComponent } from './contact-edit.component';
import { ContactSharedService  } from "../contact-shared";
import { ContactCudApplicatifServiceACI, ContactCudApplicatifMockService } from "../../../service-applicatif/contact";
export class ContactSharedMockService {
    getContact(): Observable<any> {
        return  Observable.of(CONTACTS_DO[0]);
    }
}

describe('ContactEditComponent', () => {

    let component: ContactEditComponent;
    let fixture: ComponentFixture<ContactEditComponent>;
    let contactSharedMockService: ContactSharedService;
    let contactCudApplicatifMockService: ContactCudApplicatifMockService;
    let location: Location;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ FormsModule, RouterTestingModule ],
            declarations: [ContactEditComponent],
            providers: [
                { provide: ContactSharedService, useClass: ContactSharedMockService },
                { provide: ContactCudApplicatifServiceACI,  useClass: ContactCudApplicatifMockService }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactEditComponent);
        component = fixture.componentInstance;
        contactSharedMockService = fixture.debugElement.injector.get(ContactSharedService);
        contactCudApplicatifMockService = fixture.debugElement.injector.get(ContactCudApplicatifServiceACI);
        location = fixture.debugElement.injector.get(Location);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('sould resolve current contact from shared service', () => {
        const serviceSpy = spyOn(contactSharedMockService, 'getContact').and.callThrough();
        component.ngOnInit();                                     
        fixture.detectChanges();
        expect(serviceSpy).toHaveBeenCalled();                      // Expect getContact of contactSharedMockService to be called
        expect(component.contact).toEqual(CONTACTS_DO[0]);          // Expect resolved value is as expected.
    });

    it('should save modified contact when save button is clicked', fakeAsync(() => {
        const applicatifSpy = spyOn(contactCudApplicatifMockService, 'updateContact').and.callThrough(); 
        const locationSpy = spyOn(location, 'back').and.callThrough();
        let expectedModifiedContact: ContactDo = { id: 1, firstName: "Firstname modified", lastName: "Lastname modified", company: "Company modified", address: "Address modified", city: "City modified", email: "Email modified", phone: "Phone modified" };
        var editableProperties: string[] = ["firstName", "lastName", "company", "address", "city", "email", "phone"];
        let inputs = fixture.nativeElement.querySelectorAll('input');
        editableProperties.forEach((prop, index) => {
            inputs[index].value = expectedModifiedContact[prop];            // Modify each field
            inputs[index].dispatchEvent(new Event('input'));
        });
        tick();
        fixture.detectChanges();
        fixture.nativeElement.querySelectorAll('button')[0].click();        // Click on save button
        expect(applicatifSpy).toHaveBeenCalledWith(expectedModifiedContact);  
        expect(locationSpy).toHaveBeenCalled(); 
    }));

    it('sould have a functioning cancel button', () => {
        const locationSpy = spyOn(location, 'back').and.callThrough();
        fixture.nativeElement.querySelectorAll('button')[1].click();        // Click on cancel button
        expect(locationSpy).toHaveBeenCalled();                             // Expect location.back to be called
    });    

});

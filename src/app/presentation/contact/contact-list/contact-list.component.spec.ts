import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { ContactReadApplicatifServiceACI, ContactReadApplicatifMockService } from "../../../service-applicatif/contact";
import { CONTACTS_DTO } from "../../../donnee/contact";

import { ContactListComponent } from './contact-list.component';

describe('ContactListComponent', () => {

    let component: ContactListComponent;
    let fixture: ComponentFixture<ContactListComponent>;
    let contactReadApplicatifMockService: ContactReadApplicatifMockService;
    let de;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ ContactListComponent ],
            providers: [ { provide: ContactReadApplicatifServiceACI, useClass: ContactReadApplicatifMockService } ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement; 
        contactReadApplicatifMockService = fixture.debugElement.injector.get(ContactReadApplicatifServiceACI);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('sould resolve list of contacts on init', fakeAsync(() => {
        const serviceSpy = spyOn(contactReadApplicatifMockService, 'getContacts').and.callThrough();
        component.ngOnInit();                                       // Explitely call component's ngOnInit method
        fixture.detectChanges();
        expect(serviceSpy).toHaveBeenCalled();                      // Expect getContacts of contactReadApplicatifMockService to be called
        expect(component.contacts).toEqual(CONTACTS_DTO);           // Expect resolved value is correct.
    }));

    it('sould render list of resolved contacts', fakeAsync(() => {         
        let list = de.nativeElement.querySelectorAll('li')
        CONTACTS_DTO.forEach((ct, index) => {                       // Assert all contacts are rendered
            expect(list[index].textContent).toContain(ct.id);
            expect(list[index].textContent).toContain(ct.firstName);
            expect(list[index].textContent).toContain(ct.lastName);
        });            
    }));

    it('should update current contact if an element of the list is selected', () => {
        let list = de.queryAll(By.css('li'));
        let firstLi = list[0];
        let firstContact = CONTACTS_DTO[0];
        firstLi.triggerEventHandler('click', null);
        expect(component.contact).toEqual(firstContact);
    });
});     

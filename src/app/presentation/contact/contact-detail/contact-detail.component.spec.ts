import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { ContactSharedService  } from "../contact-shared";

import { ContactDetailComponent } from '.';

import { CONTACTS_DO } from "../../../donnee/contact";

describe('ContactDetailComponent', () => {

    let component: ContactDetailComponent;
    let fixture: ComponentFixture<ContactDetailComponent>;
    let de;
    let contactSharedService: ContactSharedService;

    var labelPropMap: Map<string, string> = new Map<string, string>();
    labelPropMap.set("Firstname", "firstName");
    labelPropMap.set("Lastname", "lastName");
    labelPropMap.set("Company", "company");
    labelPropMap.set("Address", "address");
    labelPropMap.set("City", "city");
    labelPropMap.set("Email", "email");
    labelPropMap.set("Phone", "phone");

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ RouterTestingModule ],
            declarations: [ ContactDetailComponent ],
            providers: [
                ContactSharedService,
                {  provide: ActivatedRoute,  useValue: { data: Observable.of( { contact: CONTACTS_DO[0] } ) } }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactDetailComponent);
        de = fixture.debugElement; 
        component = fixture.componentInstance;
        contactSharedService = fixture.debugElement.injector.get(ContactSharedService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('sould resolve a contact of which details are to be displayed', () => {        
        fixture.detectChanges();         
        expect(component.contact).toEqual(CONTACTS_DO[0]);              // Expect resolved value is correct.
    });

    it('sould properly render detail of contact', () => {   
        fixture.detectChanges();
        let renderedProperties = de.nativeElement.querySelectorAll('div');
        expect(renderedProperties.length).toBe(7);
        renderedProperties.forEach(propDiv => {
            var label = propDiv.children[0].innerText.slice(0, -1);     // Remove ':'
            expect(propDiv.textContent).toContain(CONTACTS_DO[0][labelPropMap.get(label)]);
        }); 
    });

    it('should set current contact in shared if Edit button is clicked', () => {
        const serviceSpy = spyOn(contactSharedService, 'setContact').and.callThrough();  
        fixture.nativeElement.querySelector('button').click();     
        fixture.detectChanges();
        expect(serviceSpy).toHaveBeenCalledWith(CONTACTS_DO[0]);  
    });

});

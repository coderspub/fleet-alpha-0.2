import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontrackingdetailsComponent } from './persontrackingdetails.component';

describe('PersontrackingdetailsComponent', () => {
  let component: PersontrackingdetailsComponent;
  let fixture: ComponentFixture<PersontrackingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontrackingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontrackingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

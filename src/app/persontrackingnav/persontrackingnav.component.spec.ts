import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontrackingnavComponent } from './persontrackingnav.component';

describe('PersontrackingnavComponent', () => {
  let component: PersontrackingnavComponent;
  let fixture: ComponentFixture<PersontrackingnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontrackingnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontrackingnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

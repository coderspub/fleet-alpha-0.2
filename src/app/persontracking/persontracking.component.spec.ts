import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontrackingComponent } from './persontracking.component';

describe('PersontrackingComponent', () => {
  let component: PersontrackingComponent;
  let fixture: ComponentFixture<PersontrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersontrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersontrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsortiumContactComponent } from './consortium-contact.component';

describe('ConsortiumContactComponent', () => {
  let component: ConsortiumContactComponent;
  let fixture: ComponentFixture<ConsortiumContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsortiumContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsortiumContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

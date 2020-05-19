import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsortiumNavbarComponent } from './consortium-navbar.component';

describe('ConsortiumNavbarComponent', () => {
  let component: ConsortiumNavbarComponent;
  let fixture: ComponentFixture<ConsortiumNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsortiumNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsortiumNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

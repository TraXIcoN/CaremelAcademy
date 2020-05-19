import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsortiumHomepageComponent } from './consortium-homepage.component';

describe('ConsortiumHomepageComponent', () => {
  let component: ConsortiumHomepageComponent;
  let fixture: ComponentFixture<ConsortiumHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsortiumHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsortiumHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

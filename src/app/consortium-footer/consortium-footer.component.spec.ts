import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsortiumFooterComponent } from './consortium-footer.component';

describe('ConsortiumFooterComponent', () => {
  let component: ConsortiumFooterComponent;
  let fixture: ComponentFixture<ConsortiumFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsortiumFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsortiumFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

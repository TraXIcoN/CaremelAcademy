import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifescihealthComponent } from './lifescihealth.component';

describe('LifescihealthComponent', () => {
  let component: LifescihealthComponent;
  let fixture: ComponentFixture<LifescihealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifescihealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifescihealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

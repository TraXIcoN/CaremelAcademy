import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasciComponent } from './datasci.component';

describe('DatasciComponent', () => {
  let component: DatasciComponent;
  let fixture: ComponentFixture<DatasciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

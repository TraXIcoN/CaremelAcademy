import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumergsComponent } from './consumergs.component';

describe('ConsumergsComponent', () => {
  let component: ConsumergsComponent;
  let fixture: ComponentFixture<ConsumergsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumergsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumergsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

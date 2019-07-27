import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousAppointmentComponent } from './previous-appointment.component';

describe('PreviousAppointmentComponent', () => {
  let component: PreviousAppointmentComponent;
  let fixture: ComponentFixture<PreviousAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

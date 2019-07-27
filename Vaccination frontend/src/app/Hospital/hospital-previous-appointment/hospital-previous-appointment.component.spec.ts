import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalPreviousAppointmentComponent } from './hospital-previous-appointment.component';

describe('HospitalPreviousAppointmentComponent', () => {
  let component: HospitalPreviousAppointmentComponent;
  let fixture: ComponentFixture<HospitalPreviousAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalPreviousAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalPreviousAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

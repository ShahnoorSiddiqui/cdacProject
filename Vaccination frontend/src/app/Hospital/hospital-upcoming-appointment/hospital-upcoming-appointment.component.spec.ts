import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalUpcomingAppointmentComponent } from './hospital-upcoming-appointment.component';

describe('HospitalUpcomingAppointmentComponent', () => {
  let component: HospitalUpcomingAppointmentComponent;
  let fixture: ComponentFixture<HospitalUpcomingAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalUpcomingAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalUpcomingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

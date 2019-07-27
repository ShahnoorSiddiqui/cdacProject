import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeAppointmentComponent } from './take-appointment.component';

describe('TakeAppointmentComponent', () => {
  let component: TakeAppointmentComponent;
  let fixture: ComponentFixture<TakeAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

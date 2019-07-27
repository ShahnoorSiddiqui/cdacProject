import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisableHospitalListComponent } from './admin-disable-hospital-list.component';

describe('AdminDisableHospitalListComponent', () => {
  let component: AdminDisableHospitalListComponent;
  let fixture: ComponentFixture<AdminDisableHospitalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDisableHospitalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisableHospitalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

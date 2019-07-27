import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHospitalListComponent } from './admin-hospital-list.component';

describe('AdminHospitalListComponent', () => {
  let component: AdminHospitalListComponent;
  let fixture: ComponentFixture<AdminHospitalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHospitalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHospitalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

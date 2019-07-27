import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalMenuBarComponent } from './hospital-menu-bar.component';

describe('HospitalMenuBarComponent', () => {
  let component: HospitalMenuBarComponent;
  let fixture: ComponentFixture<HospitalMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

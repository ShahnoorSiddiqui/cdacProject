import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuBarComponent } from './user-menu-bar.component';

describe('UserMenuBarComponent', () => {
  let component: UserMenuBarComponent;
  let fixture: ComponentFixture<UserMenuBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

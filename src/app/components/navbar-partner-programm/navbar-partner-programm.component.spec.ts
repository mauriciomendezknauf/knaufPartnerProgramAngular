import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPartnerProgrammComponent } from './navbar-partner-programm.component';

describe('NavbarPartnerProgrammComponent', () => {
  let component: NavbarPartnerProgrammComponent;
  let fixture: ComponentFixture<NavbarPartnerProgrammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPartnerProgrammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPartnerProgrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

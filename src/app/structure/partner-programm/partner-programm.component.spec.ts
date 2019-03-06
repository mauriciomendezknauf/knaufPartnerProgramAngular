import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerProgrammComponent } from './partner-programm.component';

describe('PartnerProgrammComponent', () => {
  let component: PartnerProgrammComponent;
  let fixture: ComponentFixture<PartnerProgrammComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerProgrammComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerProgrammComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

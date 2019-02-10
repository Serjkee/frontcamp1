import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityLogoComponent } from './utility-logo.component';

describe('UtilityLogoComponent', () => {
  let component: UtilityLogoComponent;
  let fixture: ComponentFixture<UtilityLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilityLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

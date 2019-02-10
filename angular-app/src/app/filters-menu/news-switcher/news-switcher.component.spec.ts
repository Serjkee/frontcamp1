import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSwitcherComponent } from './news-switcher.component';

describe('NewsSwitcherComponent', () => {
  let component: NewsSwitcherComponent;
  let fixture: ComponentFixture<NewsSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProfileComponent } from './ui-profile.component';

describe('UiProfileComponent', () => {
  let component: UiProfileComponent;
  let fixture: ComponentFixture<UiProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarFieldC001Component } from './star-field-c001.component';

describe('StarFieldC001Component', () => {
  let component: StarFieldC001Component;
  let fixture: ComponentFixture<StarFieldC001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarFieldC001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarFieldC001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

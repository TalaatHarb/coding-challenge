import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MengerSpongeC002Component } from './menger-sponge-c002.component';

describe('MengerSpongeC002Component', () => {
  let component: MengerSpongeC002Component;
  let fixture: ComponentFixture<MengerSpongeC002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MengerSpongeC002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MengerSpongeC002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

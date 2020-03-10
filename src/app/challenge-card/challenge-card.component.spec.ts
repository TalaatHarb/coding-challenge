import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCardComponent } from './challenge-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

describe('ChallengeCardComponent', () => {
  let component: ChallengeCardComponent;
  let fixture: ComponentFixture<ChallengeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengeCardComponent],
      imports: [
        MatCardModule, MatButtonModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

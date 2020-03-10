import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../models/challenge.model';

@Component({
  selector: 'app-challenge-card',
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss']
})
export class ChallengeCardComponent implements OnInit {

  @Input() challenge: Challenge;

  constructor() {
  }

  ngOnInit(): void {

  }

}

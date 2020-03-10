import { Component, OnInit } from '@angular/core';
import { Challenge } from '../models/challenge.model';

@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.scss']
})
export class ChallengesPageComponent implements OnInit {

  challenge: Challenge;

  constructor() { }

  ngOnInit(): void {
    this.challenge = {
      challengeLink: '',
      codeLink: '',
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, aspernatur ex? Vel excepturi
      alias fugit, cumque quae repudiandae repellat blanditiis ab magnam rerum voluptatibus illum
      et adipisci minima atque exercitationem.`,
      imageLink: 'https://via.placeholder.com/400',
      subtitle: 'Challenge sub-title',
      title: 'Challenge title',
      videoLinks: []
    };
  }

}

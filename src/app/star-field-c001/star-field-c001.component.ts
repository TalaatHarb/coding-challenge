import { Component, OnInit, OnDestroy } from '@angular/core';

import * as p5 from 'p5';

import { Star } from './models/star.model';

@Component({
  selector: 'app-star-field-c001',
  templateUrl: './star-field-c001.component.html',
  styleUrls: ['./star-field-c001.component.scss']
})
export class StarFieldC001Component implements OnInit, OnDestroy {

  private p5: any;
  public WIDTH = 600;
  public HEIGHT = 600;

  private stars: Star[] = [];

  private speed: number;

  constructor() { }

  ngOnInit(): void {
    this.createCanvas();
  }

  ngOnDestroy(): void {
    this.destroyCanvas();
  }

  private createCanvas = () => {
    this.p5 = new p5(this.drawing);
  }

  private destroyCanvas = () => {
    this.p5.noCanvas();
  }

  private drawing = (p: any): void => {
    p.setup = () => {
      p.createCanvas(this.WIDTH, this.HEIGHT).parent('star-field');
      for (let i = 0; i < 800; i++) {
        this.stars[i] = new Star(p);
      }
    };
    p.draw = () => {
      this.speed = p.map(p.constrain(p.mouseX, 0, p.width), 0, p.width, 0, 50);
      p.background(0);
      p.translate(p.width / 2, p.height / 2);
      for (const star of this.stars) {
        star.update(this.speed, p);
        star.show(p);
      }
    };
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';

import * as p5 from 'p5';
import { Box } from './models/box.model';



@Component({
  selector: 'app-menger-sponge-c002',
  templateUrl: './menger-sponge-c002.component.html',
  styleUrls: ['./menger-sponge-c002.component.scss']
})
export class MengerSpongeC002Component implements OnInit, OnDestroy {

  private p5: any;
  public WIDTH = 400;
  public HEIGHT = 400;

  private a = 0;

  private sponge: Box[] = [];

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
      p.createCanvas(this.WIDTH, this.HEIGHT, p.WEBGL).parent('menger-sponge');
      p.normalMaterial();
      const SIZE_OF_FIRST_BOX = Math.floor(p.width / 2);
      const b = new Box(0, 0, 0, SIZE_OF_FIRST_BOX, p);
      this.sponge.push(b);
    };
    p.mousePressed = () => {
      let next = [];
      for (const box of this.sponge) {
        const newBoxes = box.generate(p);
        next = next.concat(newBoxes);
      }
      this.sponge = next;
    };
    p.draw = () => {
      p.background(51);
      p.rotateX(this.a);
      p.rotateY(this.a * 0.4);
      p.rotateZ(this.a * 0.1);
      for (const box of this.sponge) {
        box.show(p);
      }
      this.a += 0.01;
    };
  }

}

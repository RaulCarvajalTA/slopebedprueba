import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bed-animation',
  templateUrl: './bed-animation.component.html',
  styleUrls: ['./bed-animation.component.scss'],
})
export class BedAnimationComponent  implements OnInit, OnChanges {

  constructor() { }

  @Input() angle: number = 10;
  rotate: string = 'rotate(15deg)'

  ngOnInit() {
    this.rotate = `rotate(${this.angle}deg)`
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.rotate = `rotate(${this.angle}deg)`
  }
}

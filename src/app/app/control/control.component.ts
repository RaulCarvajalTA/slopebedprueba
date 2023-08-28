import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent  implements OnInit {

  platformName: string = '';

  angle: number = 0

  constructor() {
  }

  ngOnInit() {}

  upButton(){
    this.angle++;
  }

  downButton(){
    this.angle--;
  }

  zeroButton(){
    this.angle = 0;
  }


}

import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent  implements OnInit {

  platformName: string = '';

  constructor(private platform: Platform) {
    this.detectPlatform();
  }

  ngOnInit() {}

  async detectPlatform() {
    await this.platform.ready();

    if (this.platform.is('cordova')) {
      if (this.platform.is('android')) {
        this.platformName = 'Android';
      } else if (this.platform.is('ios')) {
        this.platformName = 'iOS';
      } else {
        this.platformName = 'Cordova (otra)';
      }
    } else {
      this.platformName = 'Navegador';
    }
  }

}

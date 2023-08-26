import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent  implements OnInit {

  constructor(private platform: Platform) {
    this.detectPlatform();
  }

  navigator: boolean = false;
  platformName: string = '';

  ngOnInit() {}

  async detectPlatform() {
    await this.platform.ready();

    if (this.platform.is('cordova')) {
      this.navigator = false;
      if (this.platform.is('android')) {
        this.platformName = 'Android';
      } else if (this.platform.is('ios')) {
        this.platformName = 'iOS';
      } else {
        this.platformName = 'Cordova (otra)';
      }
    } else {
      this.platformName = 'Navegador';
      this.navigator = true;
    }
  }

}

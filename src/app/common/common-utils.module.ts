import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TokenService } from './services/token.service';
import { BleService } from './services/ble.service';
import { BLE } from '@awesome-cordova-plugins/ble/ngx';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [
    AuthService,
    TokenService,
    BleService,
    BLE
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CommonUtilsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from "@angular/common/http";
import { AuthService } from './services/auth.service';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TokenService } from './services/token.service';
import { BleService } from './services/ble.service';
import { BedAnimationComponent } from './components/bed-animation/bed-animation.component';
import { ActualDataService } from './services/actual-data.service';


@NgModule({
  declarations: [
    ToolbarComponent,
    BedAnimationComponent
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
    ActualDataService
  ],
  exports: [
    ToolbarComponent,
    BedAnimationComponent
  ]
})
export class CommonUtilsModule { }

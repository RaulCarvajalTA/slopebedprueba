import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { BleService } from '../common/services/ble.service';
import { CommonUtilsModule } from '../common/common-utils.module';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IonicModule,
    CommonUtilsModule
  ],
  providers: [
    BleService
  ]
})
export class AppModule { }

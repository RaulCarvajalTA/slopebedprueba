import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonUtilsModule } from 'src/app/common/common-utils.module';
import { BleService } from 'src/app/common/services/ble.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HomeRoutingModule,
    CommonUtilsModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    BleService
  ]
})
export class HomeModule { }

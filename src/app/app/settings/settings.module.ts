import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from './settings.component';
import { CommonUtilsModule } from 'src/app/common/common-utils.module';
import { ActualDataService } from 'src/app/common/services/actual-data.service';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    IonicModule,
    CommonUtilsModule
  ],
  providers: [
    ActualDataService
  ]
})
export class SettingsModule { }

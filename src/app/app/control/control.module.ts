import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ControlComponent } from './control.component';
import { ControlRoutingModule } from './control-routing.module';
import { CommonUtilsModule } from 'src/app/common/common-utils.module';
import { ActualDataService } from 'src/app/common/services/actual-data.service';

@NgModule({
  declarations: [
    ControlComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ControlRoutingModule,
    CommonUtilsModule
  ],
  providers: [
    ActualDataService
  ]
})
export class ControlModule { }
 
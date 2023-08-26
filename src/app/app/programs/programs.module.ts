import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProgramsComponent } from './programs.component';
import { ProgramsRoutingModule } from './programs-routing.module';
import { CommonUtilsModule } from 'src/app/common/common-utils.module';



@NgModule({
  declarations: [
    ProgramsComponent
  ],
  exports: [
    ProgramsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ProgramsRoutingModule,
    CommonUtilsModule
  ]
})
export class ProgramsModule { }

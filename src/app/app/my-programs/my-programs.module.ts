import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyProgramsComponent } from './my-programs.component';
import { MyProgramsRoutingModule } from './my-programs-routing.module';
import { CommonUtilsModule } from 'src/app/common/common-utils.module';


@NgModule({
  declarations: [
    MyProgramsComponent
  ],
  exports: [
    MyProgramsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    MyProgramsRoutingModule,
    CommonUtilsModule
  ]
})
export class MyProgramsModule { }

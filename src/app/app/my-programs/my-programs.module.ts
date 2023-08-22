import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MyProgramsComponent } from './my-programs.component';
import { MyProgramsRoutingModule } from './my-programs-routing.module';



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
    MyProgramsRoutingModule
  ]
})
export class MyProgramsModule { }

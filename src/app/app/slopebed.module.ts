import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './slopebed-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { ControlComponent } from './control/control.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { HomeComponent } from './home/home.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';
import { ProgramsComponent } from './programs/programs.component';
import { SettingsComponent } from './settings/settings.component';
import { CommonUtilsModule } from '../common/common-utils.module';


@NgModule({
  declarations: [
    TabsComponent,
    ControlComponent,
    DocumentationComponent,
    HomeComponent,
    MyProgramsComponent,
    ProgramsComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IonicModule,
    CommonUtilsModule
  ]
})
export class SlopebedModule { }

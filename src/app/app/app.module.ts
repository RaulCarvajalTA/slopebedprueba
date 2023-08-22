import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IonicModule
  ]
})
export class AppModule { }

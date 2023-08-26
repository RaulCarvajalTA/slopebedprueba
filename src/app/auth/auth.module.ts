import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonUtilsModule } from "../common/common-utils.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    AuthRoutingModule,
    CommonUtilsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }

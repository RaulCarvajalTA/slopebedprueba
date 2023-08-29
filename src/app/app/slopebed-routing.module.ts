import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { HomeComponent } from './home/home.component';
import { ControlComponent } from './control/control.component';
import { MyProgramsComponent } from './my-programs/my-programs.component';
import { ProgramsComponent } from './programs/programs.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'control',
        component: ControlComponent
      },
      {
        path: 'my-programs',
        component: MyProgramsComponent
      },
      {
        path: 'programs',
        component: ProgramsComponent
      },
      {
        path: 'documentation',
        component: DocumentationComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        redirectTo: '/app/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

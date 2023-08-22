import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'control',
        loadChildren: () => import('./control/control.module').then(m => m.ControlModule)
      },
      {
        path: 'my-programs',
        loadChildren: () => import('./my-programs/my-programs.module').then(m => m.MyProgramsModule)
      },
      {
        path: 'programs',
        loadChildren: () => import('./programs/programs.module').then(m => m.ProgramsModule)
      },
      {
        path: 'documentation',
        loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule)
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

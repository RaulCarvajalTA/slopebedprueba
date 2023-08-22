import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProgramsComponent } from './my-programs.component';

const routes: Routes = [
  {
    path: '',
    component: MyProgramsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProgramsRoutingModule {}
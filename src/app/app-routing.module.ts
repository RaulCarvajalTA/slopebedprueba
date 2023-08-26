import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/guards/auth.guard';
import { RedirectGuard } from './common/guards/redirect.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [ RedirectGuard ],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'app',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./app/app.module').then(m => m.AppModule)
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

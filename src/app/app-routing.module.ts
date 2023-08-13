import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages';
import { ROUTES } from './constants/routes.contants';
import { AuthGuard } from './core/guards/auth.gurad';

const routes: Routes = [
  { path: ROUTES.login, component: LoginComponent },
  { path: '', redirectTo: ROUTES.login, pathMatch: 'full' },

  {
    path: ROUTES.home,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

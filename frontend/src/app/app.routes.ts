import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/consts/routes.const';
import { authGuard } from './core/guards/auth/auth.guard';
import { publicGuard } from './core/guards/public/public.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: APP_ROUTES.ACCOUNT,
    canActivate: [publicGuard],
    loadChildren: () =>
      import('./core/routes/auth.routes').then(r => r.authRoutes),
  },
  {
    path: '',
    canActivate: [authGuard],
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./core/routes/application.routes').then(r => r.applicationRoutes),
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.ACCOUNT_LOGIN
  }
];

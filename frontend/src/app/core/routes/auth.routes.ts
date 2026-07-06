import { Routes } from '@angular/router';
import { APP_ROUTES } from '../consts/routes.const';

export const authRoutes: Routes = [
  {
    path: APP_ROUTES.login,
    loadComponent: () =>
      import('../../features/auth/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: APP_ROUTES.register,
    loadComponent: () =>
      import('../../features/auth/register/register.component').then(c => c.RegisterComponent),
  },
  {
    path: '',
    redirectTo: APP_ROUTES.login,
    pathMatch: 'full',
  },
];

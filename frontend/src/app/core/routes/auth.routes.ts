import { Routes } from '@angular/router';
import { APP_ROUTES } from '../consts/routes.const';

export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/auth/auth.component').then(c => c.AuthComponent),
    children: [
      {
        path: APP_ROUTES.LOGIN,
        loadComponent: () =>
          import('../../features/auth/login/login.component').then(c => c.LoginComponent),
      },
      {
        path: APP_ROUTES.REGISTER,
        loadComponent: () =>
          import('../../features/auth/register/register.component').then(c => c.RegisterComponent),
      },
      {
        path: '',
        redirectTo: APP_ROUTES.LOGIN,
        pathMatch: 'full',
      },
    ]
  }
];

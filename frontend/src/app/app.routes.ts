import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/routes/auth.routes').then(r => r.authRoutes),
  },
  {
    path: 'aportus',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./features/portfolio/routes/portfolio.routes').then(r => r.portfolioRoutes),
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  }
];

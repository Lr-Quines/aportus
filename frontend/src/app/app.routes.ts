import { Routes } from '@angular/router';
import { APP_ROUTES } from './core/consts/routes.const';
import { authGuard } from './core/guards/auth/auth.guard';
import { publicGuard } from './core/guards/public/public.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.accountLogin,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.account,
    canActivate: [publicGuard],
    loadChildren: () =>
      import('./features/auth/routes/auth.routes').then(r => r.authRoutes),
  },
  {
    path: APP_ROUTES.dashboard,
    canActivate: [authGuard],
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./features/portfolio/routes/portfolio.routes').then(r => r.portfolioRoutes),
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.accountLogin,
  }
];

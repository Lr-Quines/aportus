import { Routes } from '@angular/router';
import { APP_ROUTES } from '../consts/routes.const';

export const applicationRoutes: Routes = [
  {
    path: '',
    redirectTo: APP_ROUTES.homePage,
    pathMatch: 'full'
  },
  {
    path: APP_ROUTES.homePage,
    loadComponent: () =>
      import('../../features/home-page/home-page.component').then(c => c.HomePageComponent),
  },
  {
    path: APP_ROUTES.portfolios,
    loadComponent: () =>
      import('../../features/portfolio/portfolio.component').then(c => c.PortfolioComponent),
  },
];

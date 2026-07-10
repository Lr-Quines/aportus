import { Routes } from '@angular/router';
import { APP_ROUTES } from '../consts/routes.const';

export const applicationRoutes: Routes = [
  {
    path: APP_ROUTES.HOME_PAGE,
    loadComponent: () =>
      import('../../features/home-page/home-page.component').then(c => c.HomePageComponent),
  },
  {
    path: APP_ROUTES.PORTFOLIOS,
    loadComponent: () =>
      import('../../features/portfolio/portfolio.component').then(c => c.PortfolioComponent),
  },
  {
    path: APP_ROUTES.CALCULATORS,
    loadChildren: () =>
      import('../../features/calculators/routes/calculators.routes').then(c => c.CalculatorsRoutes)
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.HOME_PAGE,
    pathMatch: 'full'
  },
];

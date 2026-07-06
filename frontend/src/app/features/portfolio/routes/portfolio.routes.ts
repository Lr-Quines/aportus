import { Routes } from '@angular/router';

export const portfolioRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../portfolio/portfolio.component').then(c => c.PortfolioComponent),
  }
];

import { Routes } from "@angular/router";
import { APP_ROUTES } from "../../../core/consts/routes.const";

export const CalculatorsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../calculators.component').then(c => c.CalculatorsComponent),
    children: [
      {
        path: '',
        redirectTo: APP_ROUTES.COMPOUND_INTEREST,
        pathMatch: 'full'
      },
      {
        path: APP_ROUTES.COMPOUND_INTEREST,
        loadComponent: () =>
          import('../../calculators/compound-interest/compound-interest.component').then(c => c.CompoundInterestComponent)
      },
      {
        path: APP_ROUTES.FIRST_MILLION,
        loadComponent: () =>
          import('../../calculators/first-million/first-million.component').then(c => c.FirstMillionComponent)
      },
      {
        path: APP_ROUTES.EMERGENCY_FUND,
        loadComponent: () =>
          import('../../calculators/emergency-fund/emergency-fund.component').then(c => c.EmergencyFundComponent)
      }
    ]
  }
]

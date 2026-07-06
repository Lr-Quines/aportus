import { ApplicationConfig, inject, provideAppInitializer, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { ThemeService } from './core/services/theme/theme.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    provideAppInitializer(() => {
      inject(ThemeService).loadTheme();
    })
  ]
};

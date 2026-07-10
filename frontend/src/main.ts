import { bootstrapApplication } from '@angular/platform-browser';
import { register } from 'swiper/element';
import { App } from './app/app';
import { appConfig } from './app/app.config';

register();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

import { InjectionToken, ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideRouter } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';

import { routes } from './app.routes';

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
  availableLanguages: Array<any>;
  demoMode: boolean;
}

export const BaseAppConfig: AppConfig = {
  availableLanguages: [{
    code: 'en',
    name: 'English'
  }, {
    code: 'ar',
    name: 'Arabic'
  }, {
    code: 'sp',
    name: 'Spanish'
  }, {
    code: 'pt',
    name: 'Portuguese'
  }, {
    code: 'in',
    name: 'Indonesia'
  }, {
    code: 'fr',
    name: 'French'
  }],
  demoMode: true,
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular(),
    importProvidersFrom(IonicStorageModule.forRoot())
  ]
};
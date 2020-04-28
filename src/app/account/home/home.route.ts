import { Route } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/helpers/auth.guard';

export const homeRoute: Route = {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
};

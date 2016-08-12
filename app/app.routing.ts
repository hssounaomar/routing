import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {PersonneComponent} from './personne.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component.ts';
const appRoutes: Routes = [
  {
    path: 'personnes',
    component: PersonneComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}

];
export const routing = RouterModule.forRoot(appRoutes);
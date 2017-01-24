import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const APP_ROUTES = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

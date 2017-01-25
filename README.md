This is [The Tour of Heros - Routing](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html) tutorial.

The routing part is kind of long.  This covers from *Select a _Dashboard_ Hero* through *Refactor routes to a _Routing Module_*.

Use `ng serve` rather than `npm start` to serve the application.

## Select a _Dahsboard_ Hero

In *src/app/dashboard/dashboard.component.html*, you need to replace the entire <div *ngFor...>...</div> with this:
```
  <a *ngFor="let hero of heroes"  [routerLink]="['/detail', hero.id]"  class="col-1-4"></a>
```
To make the *src/app/app.routes.ts* more compliant (like src/app-routing.module.ts), I changed from this:
```
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const APP_ROUTES = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }
];
```
to this:
```
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}  
```
Add this line to *src/app/app.module.ts*:
```
import { AppRoutingModule } from './app.routes';
```
Change from this:
```
    RouterModule.forRoot(APP_ROUTES)
```
to this:
```
    AppRoutingModule
```
In *src/app/app.module.ts* remove this:
```
import { APP_ROUTES } from './app.routes';
```

After this line is README.md that Angular generated for me.
***
# AngularTourOfHeroes

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

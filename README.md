This is [The Tour of Heros - Routing](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html) tutorial.

The routing part is kind of long.  This is up to *Naviget to Hero Details*.

Use `ng serve` rather than `npm start` to serve the application.

## Re-factoring

When copying the app component to the heroes component, I copied the *.*.css and *.*.html files, too.

In the *src/app/heroes.component.ts* file, I changed from this:
```
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
```
to this:
```
@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
  export class HeroesComponent {
```
I deleted this line:
```
    title = 'Tour of Heroes';
```
I fixed *src/app/app.component.html* to look like this:
```
<h2>My Heroes</h2>
<heroes></heroes>
```
I added this to the top of *src/app/app.modules.ts*:
```
import { HeroesComponent } from './heroes.component';
```
And changed from this:
```
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
```
to this:
```
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
```
I didn't need this in *src/app/heroes.component.html*:
```
<h2>My Heroes</h2>
```
Finally, I could clean out all the extra stuff from *src/app/app.component.ts*.  At the end of the refactoring, it looked like this:
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {

    title = 'Tour of Heroes';
  }
```
## Routing

After the re-factoring, I needed to do the routing. Just like I put the template code in \*.\*.html, I put the routing in another file, *src/code/app.routes.ts*, which looked like this:
```
import { HeroesComponent } from './heroes.component';

export const APP_ROUTES = [
  { path: 'heroes', component: HeroesComponent }
];
```
Changes to *src/app/app.modules.ts*:

I added these lines near the top:
```
import { RouterModule, Routes } from '@angular/router';

import { APP_ROUTES } from './app.routes';
```
I changed from this:
```
    HttpModule
  ],
```
to this:
```
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
```
I changed *src/app/app.component.html* from this:
```
<h2>My Heroes</h2>
<heroes></heroes>
```
to this:
```
<h1>{{title}}</h1>
  <a routerLink="/heroes">Heroes</a>
  <router-outlet></router-outlet>
```

## Add a _Dashboard_
Rather than creating the dashboard component by hand, from the src/app directory, I typed:
```
ng g c dashboard
```
which is short for `ng generate component dashboard`.  I deleted `src/app/dahsboard/dashboard.component.spec.ts`.

If you notice, `ng g c dashboard` will report:
```
update src/app/app.module.ts
```
The route generation _automatically_ adds DashboardComponent to *src/app/app.module.ts*, so you don't have to do anything to it.

I changed  *src/app/app.routes.ts* like this:
```
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const APP_ROUTES = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
```
Change the *src/app/app.component.html* to be like this:
```
<h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard">Dashboard</a>
     <a routerLink="/heroes">Heroes</a>
   </nav>
  <router-outlet></router-outlet>
```
Change *src/app/dashboard/dashboard.component.html* to be like this:
```
<h3>Top Heroes</h3>
<div class="grid grid-pad">
  <div *ngFor="let hero of heroes" class="col-1-4">
    <div class="module hero">
      <h4>{{hero.name}}</h4>
    </div>
  </div>
</div>
```
Change the *src/app/dashboard/dashboard.component.ts* to be like this:
```
import { Component, OnInit } from '@angular/core';

import { Hero } from './../hero';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
		this.heroService.getHeroes()
			.then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
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

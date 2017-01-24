This is [The Tour of Heros - Routing](https://angular.io/docs/ts/latest/tutorial/toh-pt5.html) tutorial.

The routing part is kind of long.  This covers from *Navigate to Hero Details* to *Select a _Dashboard_ Hero*.

Use `ng serve` rather than `npm start` to serve the application.

## Configure a Route with a Parameter

To *src/app/app.routes.ts*, add these lines:
```
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
```
and 
```
  { path: 'detail/:id', component: HeroDetailComponent }
```
## Revise the _HeroDetailComponent_

To *src/app/heroes-detail.component.ts*, add these imports:
```
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from '../hero.service';
```
Change the constructor:
```
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
```

And fix the ngOnInit:
```
  ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
  }
```
And add this function:
```
	goBack(): void {
		this.location.back();
	}
```
To *src/app/hero.service.ts*, add this function:
```
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
```
The *src/app/hero-detail/hero-detail.component.html* is going to look like this:
```
<div *ngIf="hero">
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
</div>
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

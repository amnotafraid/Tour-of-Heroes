This is [The Tour of Heros - Multiple Components](https://angular.io/docs/ts/latest/tutorial/toh-pt3.html) tutorial.  The branch is Part3.

Use `ng serve` rather than `npm start` to serve the application.

Rather than creating the hero-detail component in an editor, I did this from the src/app directory:
```
ng generate component hero-detail
```
I removed the src/app/hero-detail/hero-detail.component.spec.ts file.

Rather than putting the template information inside src/app/hero-detail/hero-detail.component.ts, I removed the auto-generated code and put this in src/app/hero-detail/hero-detail.component.html:
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
In `src/app/hero-detail/hero-detail.component.ts` I changed from this:
```
selector: 'app-hero-detail',
```
to this:
```
selector: 'hero-detail',
```
In `src/app/app.component.ts` the hero import looks like this:
```
import { Hero } from './hero';
```
In `src/app/hero-detail/hero-detail.component.ts` the hero import looks like this:
```
import { Hero } from '../hero';
```
Also, in this file, declare the here input like this:
```
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { } 
```
and make sure you add Input to the import list at the top:
```
import { Component, OnInit, Input } from '@angular/core';
```
You don't have to import HeroDetailComponent or change the @NgModule in AppModule, because the generator already added the import to src/app/app.module.ts. However, you must import the HeroDetail to src/app/app.component.ts.  Add this line to the top:

```
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
```
In the src/app/app.component.html, change from this:
```
<div *ngIf="selectedHero">
  <h2>{{selectedHero.name}} details!</h2>
  <div><label>id: </label>{{selectedHero.id}}</div>
  <div>
      <label>name: </label>
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
  </div>
</div>
```
to this:
```
<hero-detail [hero]="selectedHero"></hero-detail>
```
BTW, I removed these two files:
* src/app/app.component.spec.ts
* src/app/hero-detail/hero-detail.component.spec.ts

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

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {

    title = 'Tour of Heroes';
		selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
      this.getHeroes();
    }

		onSelect(hero: Hero): void {
			this.selectedHero = hero;
		}

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
  }

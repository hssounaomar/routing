import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Personne }                from './personne';
import { PersonneService }         from './personne.service';
@Component({
  selector: 'my-heroes',
  templateUrl: 'app/personne.component.html',
  styleUrls:  ['app/personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Personne[];
  selectedHero: Personne;
  constructor(
    private personneService: PersonneService,
    private router: Router) { }
  getHeroes(): void {
    this.personneService
        .getPersonnes()
        .then(heroes => this.personnes= heroes);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.personneService.create(name)
      .then(hero => {
        this.personnes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Personne): void {
    this.personneService
        .delete(hero.id)
        .then(() => {
          this.personnes = this.personnes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Personne): void {
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personne }        from './personne';
import { PersonneService } from './personne.service';
@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Personne;
  constructor(
    private heroService: PersonneService,
    private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }
  save(): void {
    this.heroService.update(this.hero)
      .then(this.goBack);
  }
  goBack(): void {
    window.history.back();
  }
}

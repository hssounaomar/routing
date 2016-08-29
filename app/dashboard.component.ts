import { Component , OnInit } from '@angular/core';
import {Personne} from './personne.ts';
import {PersonneService} from './personne.service';
@Component({
  selector: 'my-dashboard',
 templateUrl: 'app/dashboard.component.html',
 styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit { 
personnes: Personne[] = [];
  constructor(private personneService: PersonneService) { }
  ngOnInit() {
    this.personneService.getPersonnes()
      .then(personnes => this.personnes = personnes.slice(1, 5));
  }
  gotoDetail() { /* not implemented yet */}
}

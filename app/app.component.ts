import { Component } from '@angular/core';
import {PersonneComponent} from './personne.component';
@Component({
  selector: 'my-app',
  template:`
   <h1>{{title}}</h1>
  <a routerLink="/personnes">Heroes</a>
  <a routerLink="/dashboard">Dashboard</a>
  <router-outlet></router-outlet>
    `,
  directives:[PersonneComponent]
})
export class AppComponent {
  title = 'toutes les persones';
}
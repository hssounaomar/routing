import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }   from './app.component';
import { routing }        from './app.routing';

import { PersonneComponent }  from './personne.component';

import { PersonneService }  from './personne.service';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    PersonneComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [
    PersonneService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

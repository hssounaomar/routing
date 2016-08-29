import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Personne } from './personne';
@Injectable()
export class PersonneService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'app/personnes';  // URL to web api
  constructor(private http: Http) { }
  getPersonnes(): Promise<Personne[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Personne[])
               .catch(this.handleError);
  }
  getHero(id: number): Promise<Personne> {
    return this.getPersonnes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
  delete(id: number): Promise<void> {
    let url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Personne> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(hero: Personne): Promise<Personne> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

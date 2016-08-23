import {Personne} from './personne';
import { Injectable } from '@angular/core';
import {personnes} from './mock.personnes';

@Injectable()
export class PersonneService {
    private personnesUrl = 'app/personnes';  // URL to web api
    getPersonnes(): Promise<Personne[]>{
return Promise.resolve(personnes);
    }
}



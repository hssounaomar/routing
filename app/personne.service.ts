import {Personne} from './personne';
import { Injectable } from '@angular/core';
import {PERSONNES} from './mock.personnes';
@Injectable()
export class PersonneService {
    getPersonnes(){
return Promise.resolve(PERSONNES);
    }
}
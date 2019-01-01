import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  constructor(private msgService: MessageService,
              private http: HttpClient,
              private messageService: MessageService) { }

  private log(message:string)
  {
    this.messageService.add(`HeroService: ${message}`);
  }



  getHeroes(): Observable<Hero[]> {
    this.msgService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.msgService.add(`HeroService: fetched hero id=${id}`);
    var tmp = of(HEROES.find(x => x.id === id));
    return tmp;
  }

}

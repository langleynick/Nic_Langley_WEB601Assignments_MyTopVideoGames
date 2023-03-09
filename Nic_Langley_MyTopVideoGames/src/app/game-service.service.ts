import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  getGames (): Observable <Content[]> {
    return of (CONTENT);
  }
  getGame (id : number ): Observable<Content[]> {
    let game: Content []= CONTENT.filter(obj => obj.id == id);
    return of (game);
  }
}

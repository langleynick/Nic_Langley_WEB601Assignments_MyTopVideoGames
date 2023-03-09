import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private messageService: MessageService) { }

  getGames (): Observable <Content[]> {
    const games = of(CONTENT)
    this.messageService.add('Content array loaded!');
    return games;
  }
  getGame (id : number ): Observable<Content[]> {
    const game = CONTENT.filter(obj => obj.id == id);
    this.messageService.add('Content ID: ' + id)
    return of (game);
  }
}

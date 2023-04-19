import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Content } from './helper-files/content-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getGames (): Observable <Content[]> {
    return this.http.get<Content[]>("api/games");
  }
  addGame(game: Content): Observable<Content>{
    return this.http.post<Content>("api/games", game, this.httpOptions);
  }
  getGame (id: number): Observable <Content> {
    return this.http.get<Content>('api/games/' + id);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  getContentObs (): Observable <Content[]> {
    return of (CONTENT);
  }
}

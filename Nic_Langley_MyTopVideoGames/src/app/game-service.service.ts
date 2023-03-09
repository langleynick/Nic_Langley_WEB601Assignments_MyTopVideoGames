import { Injectable } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CONTENT } from './helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  constructor() { }

  getContent (): Content[] {
    return CONTENT;
  }
}

import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  @Output() contentAddedEvent = new EventEmitter<Content>();
  @Input() games: Content [] = [];

  gamesContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    type: ''
  };

  addGameContent(){
    this.contentAddedEvent.emit(this.gamesContent);
    this.gamesContent = {
      id: 0,
      title: '',
      description:'',
      creator: '',
      type: ''
    }
  }
}

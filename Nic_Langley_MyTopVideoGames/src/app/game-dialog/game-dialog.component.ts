import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-game-dialog',
  templateUrl: './game-dialog.component.html',
  styleUrls: ['./game-dialog.component.scss']
})
export class GameDialogComponent {
  @Output() addedGames = new EventEmitter<Content>();

  constructor( public ref: MatDialogRef<GameDialogComponent>){}

  newGame: Content = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    type: ''
  };

  addGameContent(){
    this.addedGames.emit(this.newGame);
    this.newGame = {
      id: 0,
      title: '',
      description:'',
      creator: '',
      type: ''
    }
  }
}

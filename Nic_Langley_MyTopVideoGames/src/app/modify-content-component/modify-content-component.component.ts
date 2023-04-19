import { Component, EventEmitter, Output, Input, Inject } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GameDialogComponent } from '../game-dialog/game-dialog.component';


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent {
  @Output() contentAddedEvent = new EventEmitter<Content>();
  @Input() games: Content [] = [];
  constructor(public dialog: MatDialog){}
  
  openGameDialog(){
    const ref = this.dialog.open(GameDialogComponent, {
      width:'800px',
      data: {},
    });

    ref.afterClosed().subscribe((res) => {
      if(res) {
        this.contentAddedEvent.emit(res);
      }
    });
  }
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

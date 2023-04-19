import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameServiceService } from '../game-service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
    games: Content[] = [];
    @Input('ngModel') title: string;
    name = "Nick Langley";
    constructor(private contentService: GameServiceService, private messageService: MessageService) {
      this.title = "";
    }
    ngOnInit(){
      this.contentService.getGames().subscribe(games => this.games = games);
    }
    
    searchTitle(title: string){
      let doesExist : boolean = false;
      this.games.forEach(function(game){
        let itemTitle : string = game.title.toLowerCase();
        if (title === itemTitle){
          doesExist = true;
        }
        if(doesExist){
          document.getElementById('results')!.innerHTML = "<div style='color: green;'> Title Exists </div>";
        }
        else {
          document.getElementById('results')!.innerHTML = "<div style='color: red;'> Title Does Not Exist </div>";
        }
      })
    }
    addContentToList(newContent: Content): void {
      this.contentService.addGame(newContent).subscribe((game) => {
         this.games.push(game);
      });
      this.messageService.add("Success! Game added");
    }

}

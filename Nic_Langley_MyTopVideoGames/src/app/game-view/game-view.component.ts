import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameServiceService } from '../game-service.service';
import { MessageService } from '../message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {
  
  id?: number;
  content?: Content;

  constructor(private route: ActivatedRoute, private gameService: GameServiceService, private messageService: MessageService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);
      this.gameService.getGame(this.id).subscribe((content) => {
        this.content = content;
        this.messageService.add('Content ID:' + content.id + '---- Content Title: ' + content.title)
      });
    })
  }

}

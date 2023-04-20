import { Component } from '@angular/core';
import { GameServiceService } from './game-service.service';
import { LogUpdateService } from './log-update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nic_Langley_MyTopVideoGames';
  name = "Nick Langley"

  constructor(private gameService: GameServiceService, private logService: LogUpdateService){}

  ngOnInit(): void {
    this.logService.init();
  }
}

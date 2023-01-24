import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent{
contentArray: Content[];
constructor(){
  this.contentArray = [{
  id: 1,
  title: "Jedi Fallen Order",
  description: "A young Jedi must go on a journey to find himself and rediscover the force.",
  creator: "EA Games",
  imgURL: "",
  type: "Sci-Fi"
},
{
  id: 2,
  title: "God of War",
  description: "A seasoned warrior does what he must to protect his son.",
  creator: "Santa Monica Studio",
  imgURL: "",
  type: "Action"
},
{
  id: 3,
  title: "The Last of Us",
  description: "In a post apocolyptic world, Joel must protect the only hope society has of survival",
  creator: "Naughty Dog",
  imgURL: "",
  type: "Action"
}]
}
}

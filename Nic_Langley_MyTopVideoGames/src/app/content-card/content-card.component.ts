import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent{
contentArray = new ContentList();
contentItem1 : Content = {
  id: 1,
  title: "Jedi Fallen Order",
  description: "A young Jedi must go on a journey to find himself and rediscover the force.",
  creator: "EA Games",
  imgURL: "",
  type: "Sci-Fi"
};
contentItem2 : Content = {
  id: 2,
  title: "God of War",
  description: "A seasoned warrior does what he must to protect his son.",
  creator: "Santa Monica Studio",
  imgURL: "",
  type: "Action"
};
contentItem3 : Content = {
  id: 3,
  title: "The Last of Us",
  description: "In a post apocolyptic world, Joel must protect the only hope society has of survival",
  creator: "Naughty Dog",
  imgURL: "",
  type: "Action"
};
constructor(){
  this.contentArray.addFunction(this.contentItem1);
  this.contentArray.addFunction(this.contentItem2);
  this.contentArray.addFunction(this.contentItem3);
}
card1 = this.contentArray.fillCard(0);
card2 = this.contentArray.fillCard(1);
card3 = this.contentArray.fillCard(2);
}

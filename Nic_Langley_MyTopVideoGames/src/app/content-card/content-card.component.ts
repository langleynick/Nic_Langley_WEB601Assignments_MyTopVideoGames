import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent{
  @Input() item: Content | undefined;
constructor(){
  
}
displayInfo(id? : number, title? : string) {
  if(id != null && title != null)
  console.log("--- " + title + "'s image clicked ---");
  console.log("ID: " + id);
  console.log("Title: " + title)
}
}

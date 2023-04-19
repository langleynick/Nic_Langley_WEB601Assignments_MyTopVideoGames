import { Component, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() newContentEvent = new EventEmitter<Content>();
  newContentItem: Content = {
    id: 0,
    title: '',
    description: '',
    creator:'',
    type:'',
  };
  
  addContent() {
    this.newContentEvent.emit(this.newContentItem);
  }
  
}

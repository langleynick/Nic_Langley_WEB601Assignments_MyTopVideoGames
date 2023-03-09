import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
    @Input() content: Content[];
    @Input('ngModel') title: string;
    name = "Nick Langley";
    constructor() {
      this.title = "";
    }
    ngOnInit(): void {
      
    }

    searchTitle(title: string){
      let doesExist : boolean = false;
      this.content.forEach(function(item){
        let itemTitle : string = item.title.toLowerCase();
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
    addContentToList(newItem: Content) {
      this.content.push(newItem);
      this.content = Object.assign([], this.content);
      this.content = [...this.content];
    }

}

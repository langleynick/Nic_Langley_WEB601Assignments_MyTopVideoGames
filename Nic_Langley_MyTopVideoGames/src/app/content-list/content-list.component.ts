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
      this.content = [
        {
          id: 1,
          title: "The Last of Us",
          description: "In a post apocolyptic world, Joel must protect the only hope society has of survival.",
          creator: "Naughty Dog",
          type: "Action",
          tags: ["Horror", "Action", "Shooting"]
        },
        {
          id: 2,
          title: "God of War",
          description: "A seasoned warrior does what he must to protect his son.",
          creator: "Santa Monica Studio",
          imgURL: "../assets/images/controllerIMG.png",
          type: "Action",
          tags: ["Open-World", "Fighting", "Mythology"]
        },
        {
          id: 3,
          title: "Jedi Fallen Order",
          description: "A young Jedi must go on a journey to find himself and rediscover the force.",
          creator: "EA Games",
          imgURL: "../assets/images/controllerIMG.png",
          tags: ["Science Fiction", "Action", "Star Wars"]
        },
        {
          id: 4,
          title: "Call of Duty: Modern Warfare 2",
          description: "New revamp of an old First-Person Shooter.",
          creator: "Infinity Ward",
          imgURL: "../assets/images/controllerIMG.png",
          type: "Shooting",
          tags: ["Violence", "Sensitive Matters", "Shooting"]
        },
        {
          id: 5,
          title: "NBA 2k23",
          description: "A basketball game where you can create your own career or play as real basketball teams.",
          creator: "2k Games",
          imgURL: "../assets/images/controllerIMG.png",
          tags: ["Realism", "Basketball", "Celebrities"]
        },
        {
          id: 6,
          title: "Skyrim",
          description: "An old-style classic Role Playing Game where you can choose your own path.",
          creator: "Bethesda Studios",
          imgURL: "../assets/images/controllerIMG.png",
          type: "RPG",
          tags: ["Ancient", "Fiction", "Decision-making"]
        },
        {
          id: 7,
          title: "Uncharted: Among Theives",
          description: "A treasure hunter seeks fortune in an ancient city.",
          creator: "Naughty Dog",
          imgURL: "../assets/images/controllerIMG.png",
          tags: ["Ancient", "Fiction", "Treasure"]
        }
      ]
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

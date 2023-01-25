import { Content } from '../helper-files/content-interface';
export class ContentList {

    private _items: Content[];

    constructor () {
        this._items = [];
    }
    get items(): Content[] {
        return this._items;
    }
    addFunction(newItem: Content) {
        console.log(newItem);
        this._items.push(newItem);
    }
    numOfItems() {
        return this._items.length;
    }
    fillCard(index: number) {
        if (index > this._items.length){
            return ("Error: Your selection yeilds no results");
        } else {
            let title = this._items[index].title;
            let description = this._items[index].description;
            let creator = this._items[index].creator;
            let imgURL = this._items[index].imgURL;
            let type = this._items[index].type;
            return ("<div><h1><b>"+ title + "</b></h1><p>" + description + "<p></p>Creator: " + creator + "</p><img src='" + imgURL + "'><p>Type: " + type + "</p></div>");
        }
    }
}
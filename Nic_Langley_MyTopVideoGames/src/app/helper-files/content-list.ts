import { Content } from '../helper-files/content-interface';
class ContentList {

    private _items: Content[];

    constructor (_items: Content[]) {
        this._items = [];
    }
    get items(): Content[] {
        return this._items;
    }
    addFunction(newItem: Content) {
        this._items.push(newItem);
    }
    numOfItems() {
        return ContentList.length;
    }
    fillCard(index: number) {
        if (index > this._items.length){
            return ("Error: Your selection yeilds no results");
        }
        let title =   this._items[index].title;
        let description = this._items[index].description;
        let creator = this._items[index].creator;
        let imgURL = this._items[index].imgURL;
        let type = this._items[index].type;
        return ('<h1>${title}</h1>') 
    }
}
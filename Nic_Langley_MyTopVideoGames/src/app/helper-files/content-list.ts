class ContentList implements Content {

    private contentArray:Content[];

    constructor (contentArray:Content[]) {
        this.contentArray = [];
    }
    get content(): Content[] {
        return this.contentArray;
    }
    addFunction(item: Content) {
        this.contentArray.push(item);
    }
    numOfItems() {
        return this.contentArray.length;
    }
    fillCard(index: number) {
        if (index > this.contentArray.length){
            return ("Error: Your selection yeilds no results");
        }
        let title =   this.contentArray[index].title;
        let description = this.contentArray[index].description;
        let creator = this.contentArray[index].creator;
        let imgURL = this.contentArray[index].imgURL;
        let type = this.contentArray[index].type;
        return ('<h1>${title}</h1>') 
    }
}
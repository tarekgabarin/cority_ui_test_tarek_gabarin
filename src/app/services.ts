import {Injectable} from '@angular/core';

@Injectable()
export class Services {
  public items: any[] = [
    {
      title: 'Bob learns Angular',
      subheading: 'He now knows Angular!',
      subtext: 'He adds another framework to his techstack!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: true
    },
    {
      title: 'Human throws frisbee',
      subheading: 'Dog catches frisbee!',
      subtext: 'Dog is a good boy!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: false
    },
    {
      title: 'Human sdfgsfsdfthrows frisbee',
      subheading: 'Dog cadsfsatches frisbee!',
      subtext: 'Dog is a good bvsdfvsdvoy!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: false
    },
    {
      title: 'Humavsdvsdn throsdvsdvsdvws frisbee',
      subheading: 'Dog cavsddsvstches frisbee!',
      subtext: 'Dog is adsvsdfeegedsf good boy!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: false
    }
  ];

  isListHidden: boolean = false;

  numberOfNewItems: number = this.items.map(function (item) {
    if (item.isNewItem) {
      return item;
    }
  }).length;

  deleteItem = (itemObj: { itemTitle: string, itemSubheading: string, itemSubtext: string, itemDate: string }) => {
    const newItems: any [] = [];

    let numberOfFilteredNewItems: number = 0;

    const filterUndefined = this.items.map((item) => {

      if (item.title !== itemObj.itemTitle && item.subheading !== itemObj.itemSubheading) {
        if (item.subtext !== itemObj.itemSubtext && item.data !== itemObj.itemDate) {
          return item;
        }
      }
    });

    for (const item of filterUndefined) {

      if (item !== undefined) {

        newItems.push(item);

        if (item.isNewItem) {

          numberOfFilteredNewItems++;

        }

      }

    }

    this.items = newItems;

    this.numberOfNewItems = numberOfFilteredNewItems;

  };

  checkItemAsOld = (itemObj: { itemTitle: string, itemSubheading: string, itemSubtext: string, itemDate: string }) => {

    const newItems = this.items.map((item) => {

      if (item.title === itemObj.itemTitle && item.subheading === itemObj.itemSubheading && item.subtext === itemObj.itemSubtext && item.date === itemObj.itemDate) {
        return {title: item.title, subheading: item.subheading, subtext: item.subtext, date: item.date, isNewItem: false};
      } else {
        return item;

      }


    });

    let numberOfNewFilteredItems: number = 0;

    for (const item of newItems) {

      if (item.isNewItem) {

        numberOfNewFilteredItems++;

      }

    }

    this.numberOfNewItems = numberOfNewFilteredItems;

    this.items = newItems;

    console.log(this.numberOfNewItems);

    console.log(this.items);

  }

  toggleList = () => {

    this.isListHidden = !this.isListHidden;

    console.log(this.isListHidden);

  }
}

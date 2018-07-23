import {Injectable} from '@angular/core';

import {ItemModel} from './ItemComponent/item.model';

@Injectable()
export class Services {
  public items: any[] = [
    {
      title: 'Click on this item to check it as done',
      subheading: 'When you click on it, the badge number will decrease!',
      subtext: 'and the blue bar will disappear!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: true
    },

    {
      title: 'Tarek learns Angular',
      subheading: 'He now knows Angular!',
      subtext: 'He adds another framework to his techstack!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: false
    },
    {
      title: 'Human throws frisbee',
      subheading: 'Dog catches frisbee!',
      subtext: 'Dog is a good boy!',
      avatar: 'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
      date: 'Friday July 20th 2018',
      isNewItem: false
    }
  ];

  isListHidden: boolean = false;


  getNumberOfNewItems() {

    let counter: number = 0;

    for (const item of this.items) {

      if (item.isNewItem) {
        counter++;

      }

    }

    return counter;

  }


  numberOfNewItems: number = this.getNumberOfNewItems();

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

  };

  toggleList = () => {

    this.isListHidden = !this.isListHidden;

  };

  addNewItem = () => {


    const d = new Date();

    const weekdays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currentDay = weekdays[d.getDay()];

    const currentMonth = months[d.getMonth()];

    const currentDate = d.getDate() + 'th';

    const currentYear = d.getFullYear();

    const dateString = `${currentDay} ${currentMonth} ${currentDate} ${currentYear}`;

    const x: number = Math.floor((Math.random() * 10) + 1);

    const y: number = Math.floor((Math.random() * 10) + 1);

    const returnObj = new ItemModel(`Title ${x}`, `Subheading ${y}`, 'subtext', dateString);

    this.items.push(returnObj);

    let numberOfNewFilteredItems: number = 0;

    for (const item of this.items) {

      if (item.isNewItem) {

        numberOfNewFilteredItems++;

      }

    }

    this.numberOfNewItems = numberOfNewFilteredItems;


  };

}

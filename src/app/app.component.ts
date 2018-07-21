import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  @Input() public items: any[] = [
    {
      title: 'Tarek learns Angular',
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
      title: 'Human throws frisbee',
      subheading: 'Dog catches frisbee!',
      subtext: 'Dog is a good boy!',
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

  @Input() public numberOfNewItems: number = this.items.map(function (item) {
    if (item.isNewItem) {
      return item;
    }
  }).length;

  @Input() public deleteItem(itemTitle: string, itemSubheading: string, itemSubtext: string, itemDate: string) {

    this.items = this.items.map(function (item) {
      if (item.title !== itemTitle && item.subheading !== itemSubheading) {
        if (item.subtext === itemSubtext && item.data !== itemDate) {
          return item;
        }
      }
    });
    this.numberOfNewItems = this.items.map(function (item) {
      if (item.isNewItem) {
        return item;
      }
    }).length;
  }
  @Input() public checkItemAsOld(itemTitle: string, itemSubheading: string, itemSubtext: string, itemDate: string) {
    for (const item of this.items) {
      if (item.title !== itemTitle && item.subheading !== itemSubheading) {
        if (item.subtext === itemSubtext && item.data !== itemDate) {
          item.isNewItem = true;
        }
      }
    }

    this.numberOfNewItems = this.items.map(function (item) {
      if (item.isNewItem) {
        return item;
      }
    }).length;
  }
}



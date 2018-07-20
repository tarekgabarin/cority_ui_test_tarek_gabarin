import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  @Input() items: any[] = [
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
}

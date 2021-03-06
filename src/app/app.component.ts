import {Component, OnInit, Input} from '@angular/core';

import {Services} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  @Input() items: { title: string, subheading: string, subtext: string, avatar: string, date: string, isNewItem: boolean }[] = [];

  @Input() numberOfNewItems: number;

  @Input() numOfItems: number;

  @Input() isListHidden: boolean;

  constructor(public listServices: Services) {
  }

  ngOnInit() {

    // this.items = this.listServices.items;
    //
    // this.numberOfNewItems = this.listServices.numberOfNewItems;

  }


}



import {Component, OnInit} from '@angular/core';

import {Services} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  items: { title: string, subheading: string, subtext: string, avatar: string, date: string, isNewItem: boolean }[] = [];

  numberOfNewItems: number;

  constructor(private listServices: Services) {
  }

  ngOnInit() {

    this.items = this.listServices.items;

    this.numberOfNewItems = this.listServices.numberOfNewItems;

  }


}



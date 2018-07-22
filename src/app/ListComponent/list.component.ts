import {Component, Input, EventEmitter} from '@angular/core';

import {ItemModel} from '../ItemComponent/item.model';
import {Services} from '../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() items: any [];
  @Input() numberOfNewItems: number;
  @Input() numOfItems: number;
  @Input() isListHidden: boolean;

  constructor(private listServices: Services) {
  }
}

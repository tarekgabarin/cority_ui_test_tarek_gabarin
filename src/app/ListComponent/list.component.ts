import {Component, Input, EventEmitter} from '@angular/core';

import {ItemModel} from '../ItemComponent/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() deleteItem: () => {};
  @Input() checkItemAsOld: () => {};
  @Input() items: any [];
  @Input() numberOfNewItems: number;
}

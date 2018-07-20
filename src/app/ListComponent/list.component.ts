import {Component, Input} from '@angular/core';

import {ItemModel} from '../ItemComponent/item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() items: any [];
}

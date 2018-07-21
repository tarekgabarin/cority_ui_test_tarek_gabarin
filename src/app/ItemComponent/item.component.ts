import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  @Input() checkItemAsOld: () => {};

  @Input() deleteItem: () => {};

  @Input() item: { title: string, subheading: string, subtext: string, avatar: string, date: string, isNewItem: boolean };

  @Input() numberOfNewItems: number;

  updateLeftBlueBorder() {

    return this.item.isNewItem ? 'none' : 'solid 0.4em #2473bc';

  }
}

import {Component, EventEmitter, Input} from '@angular/core';
import {Services} from '../services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  @Input() item: { title: string, subheading: string, subtext: string, avatar: string, date: string, isNewItem: boolean };

  @Input() numberOfNewItems: number;

///  @Input() itemsArray: any[];

  constructor(private listServices: Services) {
  }

  updateLeftBlueBorder() {

    return this.item.isNewItem ? 'solid 0.4em #2473bc' : 'none';

  }

  onCheckNewItem(itemTitle: string, itemSubheading: string, itemSubtext: string, itemDate: string) {

    // console.log(    {
    //     itemTitle,
    //     itemSubheading,
    //     itemSubtext,
    //     itemDate
    //   }
    // );

   /// console.log(this.listServices.checkItemAsOld);

    this.listServices.checkItemAsOld({
      itemTitle,
      itemSubheading,
      itemSubtext,
      itemDate
    });
  }
  onDeleteItem(itemTitle: string, itemSubheading: string, itemSubtext: string, itemDate: string) {

    this.listServices.deleteItem({
      itemTitle,
      itemSubheading,
      itemSubtext,
      itemDate
    });

  }


}

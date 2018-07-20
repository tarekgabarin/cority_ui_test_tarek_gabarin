import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  userClickedOnItem: boolean = false;

 @Input() item: {title: string, subheading: string, subtext: string, avatar: string, date: string };

  updateLeftBlueBorder() {

    return this.userClickedOnItem ? 'none' : 'solid 0.4em #2473bc';

  }
  clickOnItem() {
    this.userClickedOnItem = true;

    // TODO When the user clicks on the item, the number in the red badge on the header component should decrease

  }
}

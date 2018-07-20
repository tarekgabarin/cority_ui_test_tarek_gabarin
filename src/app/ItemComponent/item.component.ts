import {Component} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent {

  userClickedOnItem: boolean = false;

  updateLeftBlueBorder() {

    return this.userClickedOnItem ? 'none' : 'solid 0.4em #2473bc';

  }
  clickOnItem() {
    this.userClickedOnItem = true;
  }
}

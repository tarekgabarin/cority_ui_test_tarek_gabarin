import {Component, Input} from '@angular/core';
import {Services} from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  @Input() numberOfNewItems: number;
  @Input() numOfItems: number;
  @Input() isListHidden: boolean;

  constructor(private listServices: Services) {
  }

  onCaretClick(event) {

    console.log(this.numOfItems);

    event.preventDefault();

    this.listServices.toggleList();

  }
}

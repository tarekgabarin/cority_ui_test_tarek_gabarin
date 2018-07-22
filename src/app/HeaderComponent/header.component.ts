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

  constructor(private listServices: Services) {
  }

  onCaretClick(event) {

    event.preventDefault();

    this.listServices.toggleList();

  }
}

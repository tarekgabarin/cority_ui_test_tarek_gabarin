export class ItemModel {

  public title: string;

  public subheading: string;

  public subtext: string;

  public avatar: string;

  public date: string;

  public isNewItem: boolean;

  constructor(title: string, subheading: string, subtext: string, date: string) {

    this.title = title;

    this.subheading = subheading;

    this.subtext = subtext;

    this.avatar = 'https://cdn3.iconfinder.com/data/icons/design-n-code/100/272127c4-8d19-4bd3-bd22-2b75ce94ccb4-512.png';

    this.date = date;

    this.isNewItem = true;

  }
}

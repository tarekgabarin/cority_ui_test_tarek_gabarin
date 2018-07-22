import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ListComponent} from './ListComponent/list.component';

import {HeaderComponent} from './HeaderComponent/header.component';

import {ItemComponent} from './ItemComponent/item.component';
import {FooterComponent} from './FooterComponent/footer.component';

import {Services} from './services';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    ItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }

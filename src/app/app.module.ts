import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ListComponent} from './ListComponent/list.component';

import {HeaderComponent} from './HeaderComponent/header.component';

import {ItemComponent} from './ItemComponent/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

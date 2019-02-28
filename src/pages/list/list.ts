import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  ti:string[]
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ti = ['Class of 2019', 'Wifi', 'emails', 'how much time is left in class', 'pizza', 'distractions', 'football team',
      'when they leave you on read', 'stress levels', 'what your mom sys you spend all your time on', 'when he hits you with that qaf post'];
    this.icons = ['school', 'wifi', 'at', 'clock', 'pizza', 'paper-plane',
    'american-football', 'done-all', 'trending-down', 'phone-portrait', 'pulse'];

    this.items = [];
    for(let i = 0; i < 11; i++) {
      this.items.push({
        title: this.ti[i],
        //'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[i]
        //[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}

import { Component } from '@angular/core';
import { LandmarksPage } from '../landmarks/landmarks';
import { TransportationPage } from '../transportation/transportation';
import { LocationPage } from '../location/location';

// TODO: testing from tutorial
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationPage;
  tab2Root = LandmarksPage;
  tab3Root = TransportationPage;
  
  /*selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
	
	constructor(public navCtrl: NavController) {
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];
		this.items = [];
		
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }*/

  // try to append items onto location (home) page
  /*itemTapped(event, tab1Root) {
    this.navCtrl.push(LocationPage);
  }*/
}

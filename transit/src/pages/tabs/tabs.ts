import { Component } from '@angular/core';
import { LandmarksComponent } from '../landmarks/landmarks';
import { TransportationComponent } from '../transportation/transportation';
import { LocationComponent } from '../location/location';

// TODO: testing from tutorial
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationComponent;
  tab2Root = LandmarksComponent;
  tab3Root = TransportationComponent;
  
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
    this.navCtrl.push(LocationComponent);
  }*/
}

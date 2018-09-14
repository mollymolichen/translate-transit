import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
import { TransportationPage } from '../transportation/transportation';
import { LandmarksPage } from '../landmarks/landmarks';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {
	tab1Root = LocationPage;
  tab2Root = LandmarksPage;
	tab3Root = TransportationPage;
	
	/*constructor(public navCtrl: NavController) {

  }*/

  /*itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }*/
}

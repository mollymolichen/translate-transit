import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { TabsPage } from '../tabs/tabs';
import { TransportationComponent } from '../transportation/transportation';
import { LandmarksComponent } from '../landmarks/landmarks';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationComponent {
	tab1Root = LocationComponent;
  tab2Root = LandmarksComponent;
	tab3Root = TransportationComponent;
	
	/*constructor(public navCtrl: NavController) {

  }*/

  /*itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }*/
}

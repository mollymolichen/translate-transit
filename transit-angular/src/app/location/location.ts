import { Component, OnInit } from '@angular/core';
import { TransportationPage } from '../transportation/transportation';
import { LandmarksPage } from '../landmarks/landmarks';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
  styleUrls: ['location.scss']
})

export class LocationPage implements OnInit {
	/*tab1Root = LocationPage;
  tab2Root = LandmarksPage;
	tab3Root = TransportationPage;*/
	
	constructor() {

  }

  ngOnInit() {

  }
}

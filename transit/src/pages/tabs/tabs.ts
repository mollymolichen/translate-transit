import { Component } from '@angular/core';

import { LandmarksPage } from '../landmarks/landmarks';
import { TransportationPage } from '../transportation/transportation';
import { LocationPage } from '../location/location';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocationPage;
  tab2Root = LandmarksPage;
  tab3Root = TransportationPage;

  constructor() {

  }
}

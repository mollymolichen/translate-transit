import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationComponent } from './location/location';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { TransportationComponent } from './transportation/transportation';

let routes: Routes = [
	// TODO: add default path to app-root?
	{ path: 'location', component: LocationComponent },
	{ path: 'landmarks', component: LandmarksComponent },
	{ path: 'transportation', component: TransportationComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ], 
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';
declare var require: any;
var distanceJSON = require('../distance-to-from.json');
import * as _ from "lodash";
import { LocationComponent } from '../location/location';

@Component({
  selector: 'page-landmarks',
  templateUrl: 'landmarks.html'
})
export class LandmarksComponent {
  myLocation = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
  distanceList = localStorage.getItem('distanceList') ? JSON.parse(localStorage.getItem('distanceList')) : null;

  constructor(private translateService: TranslateService) {
    
  }

  ngOnInit(){
    this.getDistances();
  }

  getDistances(){
    let myLoc = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
    
    for (let i = 0; i < distanceJSON.length; i++){
      if (distanceJSON[i].source === myLoc){
        this.distanceList.push(distanceJSON[i]);
      }
    }
    console.log(this.distanceList);
    localStorage.setItem('distanceList', JSON.stringify(this.distanceList));
    return this.distanceList;
  }

  // updateDistanceView(){
  //   this.distanceList = localStorage.getItem('distanceList') ? JSON.parse(localStorage.getItem('distanceList')) : null;
  // }
}



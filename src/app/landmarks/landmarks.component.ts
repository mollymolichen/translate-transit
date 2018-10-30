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
  // distanceList = JSON.parse(localStorage.getItem('distanceList')) ? JSON.parse(localStorage.getItem('distanceList')) : [];
  distanceList = this.getDistances();

  constructor(private translateService: TranslateService) {
    
  }

  ngOnInit(){
    this.getDistances();
  }

  getDistances(){
    let myLoc = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
    this.distanceList = [];
    
    for (let i = 0; i < distanceJSON.length; i++){
      if (distanceJSON[i].source === myLoc){
        this.distanceList.push(distanceJSON[i]);
      }
    }
    console.log("distance list: ", this.distanceList);
    localStorage.setItem('distanceList', JSON.stringify(this.distanceList));
    return this.distanceList;
  }
}



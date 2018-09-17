import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslateService } from '../translate.service';
// import * as distanceJSON from './distance-to-from.json';
var distanceJSON = require('./distance-to-from.json');
import * as _ from "lodash";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'page-landmarks',
  templateUrl: 'landmarks.html'
})
export class LandmarksComponent {
  // myLocation = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
  distanceList: any[] = [];

  tiles: Tile[] = [
    {text: 'Duke Chapel', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'West Union', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'West Campus Dorms', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Baldwin Auditorium', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Marketplace', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'East Campus Dorms', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Duke Gardens', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Devils Bistro', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Central Campus Dorms', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(){
    this.getDistances();
  }

  getDistances(){
    // let distanceList2 = _.find(distanceJSON, { source : "this.myLocation" }.toString());
    // let distanceList: any[] = [];
    let myLoc = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
    
    for (let i = 0; i < distanceJSON.length; i++){
      if (distanceJSON[i].source === myLoc){
        this.distanceList.push(distanceJSON[i]);
      }
    }

    console.log(this.distanceList);
    console.log(JSON.stringify(this.distanceList));
    localStorage.setItem('distanceList', JSON.stringify(this.distanceList));
    return this.distanceList;
  }
}



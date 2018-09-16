import { Component } from '@angular/core';
import * as Location from '../location/location';
import { Observable } from 'rxjs';
// import * as distances from './distance-to-from.json';
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
  // myDorm = Location.submitLocation();
  distsFromSource: Observable<any[]>;
  // TODO: add a 'dists' var to iterate thru distsFromSource???

  constructor() {
  }

  // getDistances(){
  //   let distances = {};   // to satisfy compiler
  //   let source = myDorm;
  //   // let distsFromSource: any[] = [];

  //   for (let entry in distances){
  //     if (entry.source.equals(myDorm)){
  //       this.distsFromSource.put(entry);
  //     }
  //   }

  //   return this.distsFromSource;
  //   // TODO: when calling getDistances, use ngFor to loop through JSON objs
  //   // extract: {{destination}}, {{distance-mi}}, {{distance-km}}, {{time-mins}}
  // }
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

  test() {
    console.log(localStorage.getItem('myDorm'))
  }
}



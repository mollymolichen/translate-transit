import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { TranslateService } from '../translate.service';
import { LandmarksComponent } from '../landmarks/landmarks.component';
declare var require: any;
var distanceJSON = require('../distance-to-from.json');

@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
  styleUrls: ['location.scss']
})

export class LocationComponent implements OnInit {
	constructor(private translateService: TranslateService, private landmarks: LandmarksComponent) {}

  // global vars
  campuses = {
    east: {
      name: "east",
      options: ['Neighborhood 1', 'Neighborhood 2', 'Neighborhood 3', 'Neighborhood 4', 'Neighborhood 5']
    },
    west: {
      name: "west",
      options: ['Craven', 'Crowell', 'Edens', 'Few', 'Keohane', 'Kilgo', 'Wannamaker']
    },
    central: {
      name: "central",
      options: ['TBA']
    }
  }

  myControl = new FormControl();
  myLocation = null;
  options: string[] = this.campuses.east.options;
  filteredOptions: Observable<string[]>;
  distanceList: any[] = [];

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  updateDropdown(campus: string) {
    this.options = this.campuses[campus].options;
    this.ngOnInit();
  }

  submitLocation(){
    console.log("nowww im here");

    this.myLocation = this.myControl.value;
    localStorage.setItem('myLocation', this.myControl.value);
    
    // // update distance list
    // let distanceList = localStorage.getItem('distanceList') ? localStorage.getItem('distanceList') : null;
    // if (distanceList){
    //   let newDistanceList: any[] = [];
    //   for (let i = 0; i < distanceJSON.length; i++){
    //     if (distanceJSON[i].source === this.myLocation){
    //       newDistanceList.push(distanceJSON[i]);
    //     }
    //   }
      
    //   localStorage.setItem('distanceList', JSON.stringify(newDistanceList));
    //   this.landmarks.updateDistanceView();
    //   console.log(localStorage);
    // }

    return this.myLocation;
  }
}

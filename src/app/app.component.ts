import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';
import * as _ from "lodash";
import { LocationComponent } from './location/location';

declare var require: any;
var distanceJSON = require('./distance-to-from.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'transit-angular';
  header = {
    color: "accent",
    background: "primary"
  }

  private primaryFlagCode;
  private secondaryFlagCode;
  private primaryLang;
  private secondaryLang;

  languages = [
    { flagCode: 'cn', langCode: 'zh-Hans', language: 'Chinese' },
    { flagCode: 'iq', langCode: 'ar', language: 'Arabic' },
    { flagCode: 'us', langCode: 'en', language: 'English' },
    { flagCode: 'mx', langCode: 'es', language: 'Spanish' },
    { flagCode: 'fr', langCode: 'fr', language: 'French' },
  ];

  distanceList: any[] = [];

  constructor(private translateService: TranslateService, private locationComponent: LocationComponent) {
    // default values
    this.primaryFlagCode = localStorage.getItem('primaryLang') ? _.find(this.languages, { langCode: localStorage.getItem('primaryLang') }).flagCode : 'us';
    this.secondaryFlagCode = localStorage.getItem('secondaryLang') ? _.find(this.languages, { langCode: localStorage.getItem('secondaryLang') }).flagCode : 'cn';
    
    this.primaryLang = localStorage.getItem('primaryLang') ? localStorage.getItem('primaryLang') : 'en';
    this.secondaryLang = localStorage.getItem('primaryLang') ? localStorage.getItem('primaryLang') : 'zh-Hans';

    this.translateService.generateTranslations();

    this.translateService.primaryTranslation = this.translateService.translations[localStorage.getItem('primaryLang') ? localStorage.getItem('primaryLang') : 'en'];
    this.translateService.secondaryTranslation = this.translateService.translations[localStorage.getItem('secondaryLang') ? localStorage.getItem('secondaryLang') : 'en'];
  }

  ngOnInit() {}
  
  // use lodash to quickly find element in json with same language code
  setPrimaryLanguage(){
      this.primaryLang = _.find(this.languages, { flagCode: this.primaryFlagCode })["langCode"];   
      this.translateService.primaryTranslation = this.translateService.translations[this.primaryLang];
      localStorage.setItem('primaryLang', this.primaryLang);
   }

   setSecondaryLanguage(){
      this.secondaryLang = _.find(this.languages, { flagCode: this.secondaryFlagCode })["langCode"];
      this.translateService.secondaryTranslation = this.translateService.translations[this.secondaryLang];
      localStorage.setItem('secondaryLang', this.secondaryLang);
   }

   toggleLanguage() {
      let primary = this.primaryLang;                         // ptrs to dictionary
      let secondary = this.secondaryLang;

      this.translateService.primaryTranslation = this.translateService.translations[secondary];
      this.translateService.secondaryTranslation = this.translateService.translations[primary];

      localStorage.setItem('primaryLang', secondary);         // ptrs to language code
      localStorage.setItem('secondaryLang', primary);
      
      this.primaryFlagCode = _.find(this.languages, { langCode: secondary })["flagCode"];
      this.secondaryFlagCode = _.find(this.languages, { langCode: primary })["flagCode"];
      
      this.primaryLang = secondary;
      this.secondaryLang = primary;
   }

  //  getDistances(){
  //     console.log("im here");
  //     // let distanceList = _.find(distanceJSON, { source : "this.myLocation" }.toString());
  //     let myLoc = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
      
  //     for (let i = 0; i < distanceJSON.length; i++){
  //       if (distanceJSON[i].source === myLoc){
  //         this.distanceList.push(distanceJSON[i]);
  //       }
  //     }
  //     console.log(this.distanceList);
  //     localStorage.setItem('distanceList', JSON.stringify(this.distanceList));
  //     this.locationComponent.submitLocation();
  //     return this.distanceList;
  // }
}

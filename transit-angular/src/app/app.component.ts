import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';
import * as _ from "lodash";

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
    { flagCode: 'cn', langCode: 'zh-Hans', language: 'Chinese' },  // TODO: extract langCode from JSON if you want
    { flagCode: 'iq', langCode: 'ar', language: 'Arabic' },
    { flagCode: 'us', langCode: 'en', language: 'English' },
    { flagCode: 'mx', langCode: 'es', language: 'Spanish' },
    { flagCode: 'fr', langCode: 'fr', language: 'French' },
];


  constructor(private translateService: TranslateService) {

    console.log(localStorage.getItem('primaryLang'))
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

  setPrimaryLanguage(){
    this.primaryLang = _.find(this.languages, { flagCode: this.primaryFlagCode }).langCode;   // find element in json with same language code
    this.translateService.primaryTranslation = this.translateService.translations[this.primaryLang];

    localStorage.setItem('primaryLang', this.primaryLang);
   }

   setSecondaryLanguage(){
    this.secondaryLang = _.find(this.languages, { flagCode: this.secondaryFlagCode }).langCode;
    this.translateService.secondaryTranslation = this.translateService.translations[this.secondaryLang];

    localStorage.setItem('secondaryLang', this.secondaryLang);
   }

}

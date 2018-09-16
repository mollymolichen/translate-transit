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

  // default values
  primaryFlagCode = 'us';
  secondaryFlagCode = 'cn';

  languages = [
      { flagCode: 'cn', langCode: 'zh-Hans', language: 'Chinese' },  // TODO: extract langCode from JSON if you want
      { flagCode: 'iq', langCode: 'ar', language: 'Arabic' },
      { flagCode: 'us', langCode: 'en', language: 'English' },
      { flagCode: 'mx', langCode: 'es', language: 'Spanish' },
      { flagCode: 'fr', langCode: 'fr', language: 'French' },
  ];

  constructor(private translateService: TranslateService) {}

  ngOnInit() {}

  changeLanguages(){
    
    let primaryLang = _.find(this.languages, { flagCode: this.primaryFlagCode }).langCode;
    let secondaryLang = _.find(this.languages, { flagCode: this.secondaryFlagCode }).langCode;

    this.translateService.translate("Hello world!", primaryLang, secondaryLang);
   }

}

import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service'

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
  primaryLang = '';
  secondaryLang = '';

  languages = [
      { flagCode: 'cn', langCode: 'zh-Hans', language: 'Chinese' },  // TODO: extract langCode from JSON if you want
      { flagCode: 'iq', langCode: 'ar', language: 'Arabic' },
      { flagCode: 'us', langCode: 'en', language: 'English' },
      { flagCode: 'mx', langCode: 'es', language: 'Spanish' },
      { flagCode: 'fr', langCode: 'fr', language: 'French' },
  ];

  constructor(private translateService: TranslateService) {

  }

  ngOnInit() {

  }

  changeLanguages(){
    console.log("change langs");
    for (let i = 0; i < this.languages.length; i++){
      if (this.languages[i].flagCode == this.primaryFlagCode){
        this.primaryLang = this.languages[i].langCode;
      }
      if (this.languages[i].flagCode == this.secondaryFlagCode){
        this.secondaryLang = this.languages[i].langCode;
      }
    }
     // instead of hello world, grab ALL text from page and put as content
    console.log(this.primaryLang + ' ' + this.secondaryLang);
    this.translateService.translate("Hello world!", this.primaryLang, this.secondaryLang);
   }

   // TODO: once flags selected, call translate again to update
   // this.translateService.translate("Hello world!", this.languages[0].langCode, this.languages[1].langCode);
}

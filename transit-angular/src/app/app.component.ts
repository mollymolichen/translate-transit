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

  primaryLanguageCode = 'us';
  secondaryLanguageCode = 'cn';

  languages = [
      { flagCode: 'cn', langCode: 'zh-Hans', language: 'Chinese' },  // TODO: extract langCode from JSON if you want
      { flagCode: 'iq', langCode: 'ar', language: 'Arabic' },
      { flagCode: 'us', langCode: 'en', language: 'English' },
      { flagCode: 'mx', langCode: 'es', language: 'Spanish' },
      { flagCode: 'fr', langCode: 'fr', language: 'French' },
  ]

  constructor(private translateService: TranslateService) {
  }

   ngOnInit() {
    this.translateService.translate("Hello world!", this.languages[0].langCode, this.languages[1].langCode);
   }

   // TODO: once flags selected, call translate again to update
   // this.translateService.translate("Hello world!", this.languages[0].langCode, this.languages[1].langCode);
}

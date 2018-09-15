import { Component, OnInit } from '@angular/core';


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
      { code: 'cn', language: 'Chinese' },
      { code: 'iq', language: 'Arabic' },
      { code: 'us', language: 'English' },
      { code: 'mx', language: 'Spanish' },
      { code: 'fr', language: 'French' },
  ]

   ngOnInit() {

   }
}

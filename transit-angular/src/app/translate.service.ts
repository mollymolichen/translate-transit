import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  primaryTranslation;
  secondaryTranslation

  subscriptionKey = '2143d6e1024f4580a1007aa5f8ee334c';
  host = 'https://api.cognitive.microsofttranslator.com';
  path = '/translate?api-version=3.0';
  headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Ocp-Apim-Subscription-Key', this.subscriptionKey)
      .set('X-ClientTraceId', this._getGuid());

  
  translations = {
    'en': {},
    'ar': {},
    'zh-Hans': {},
    'fr': {},
    'es': {}
  }

  phrases = [
   {code: 'location', text: 'Location'},
   {code: 'landmarks', text: 'Landmarks'},
   {code: 'transportation', text: 'Transportation'},
   {code: 'east', text: 'East'},
   {code: 'west', text: 'West'},
   {code: 'central', text: 'Central'},
   {code: 'submit', text: 'Submit'},
   {code: 'food', text: 'Food'},
   {code: 'dining', text: 'Dining'},
   {code: 'residenceHalls', text: 'Residence Halls'},
   {code: 'selectLocation', text: 'Select your location'},
   {code: 'selectDorm', text: 'Select your dorm'},
   {code: 'defaultLocation', text: 'Your default location is set to'},
   {code: 'pickOne', text: 'Pick one'},
   {code: 'transInfo', text: 'Learn more about transportation options on campus:'},
   {code: 'dukeBus', text: 'Duke Bus System'},
   {code: 'transloc', text:'Transloc: Bus Tracking App'},
   {code: 'parking', text: 'Parking on Campus'},
   {code: 'altTransport', text:'Alternate Transportation'}
  ]

  constructor(private http: HttpClient) {}

  _getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  translate(content: string, source: string, dest: string) {
    let params = `&from=${source}`+`&to=${dest}`;    

    let url: string = `${this.host}${this.path}${params}`;
    let body = [{'Text' : ` ${content} `}];

    return this.http.post(url, body, { headers: this.headers })
      .subscribe(
        (val) => {
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }

  generateTranslations() {
    let params: string = '&from=en&to=zh-Hans&to=ar&to=en&to=es&to=fr';    // TODO: fill w/ all supported langs
    let url: string = `${this.host}${this.path}${params}`;
    let body: any = this.phrases;

    return this.http.post(url, body, { headers: this.headers })
      .subscribe(
        (res: Array<any>) => {
            console.log("POST call successful value returned in body", res);
            res.forEach((element, index) => {
              this.translations["zh-Hans"][this.phrases[index].code] = element.translations[0].text;    // map translation to key on Chinese dictionary
              this.translations.ar[this.phrases[index].code] = element.translations[1].text;
              this.translations.en[this.phrases[index].code] = element.translations[2].text;
              this.translations.es[this.phrases[index].code] = element.translations[3].text;
              this.translations.fr[this.phrases[index].code] = element.translations[4].text;
            });
            console.log(this.translations);
            localStorage.setItem('translations', this.translations.toString());
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  subscriptionKey = '9a7c0c76496e42e09d321576d1018378';
  host = 'api.cognitive.microsofttranslator.com';
  path = '/translate?api-version=3.0';

  // Translate to Chinese and German.
  params = '&to=de&to=it';
  text = 'Hello, world!';

  constructor(private http: HttpClient) { }

  _getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  translate(content) {
    console.log('here');
    // TODO: set authorization key in header
    let url: string = `https://${this.host}${this.path}`;
    let origText = JSON.stringify({'Text' : content});
    let headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Ocp-Apim-Subscription-Key', this.subscriptionKey)
            .set('X-ClientTraceId', this._getGuid());
    return this.http.post(url, origText, { headers: headers })
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

    // TODO: populate json data for app to retrieve from
  }
}

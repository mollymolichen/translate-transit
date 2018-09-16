import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {


  constructor(private http: HttpClient) { 
    // TODO: ???
  }

  _getGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  translate(content: string, source: string, dest: string) {    // returns JSON
    console.log(source + ' ' + dest);
    let subscriptionKey = '2143d6e1024f4580a1007aa5f8ee334c';
    let host = 'https://api.cognitive.microsofttranslator.com';
    let path = '/translate?api-version=3.0';
    let params = `&from=${source}`+`&to=${dest}`;    

    let url: string = `${host}${path}${params}`;
    console.log(url);
    let body = [{'Text' : ` ${content} `}];
    let headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Ocp-Apim-Subscription-Key', subscriptionKey)
        .set('X-ClientTraceId', this._getGuid());

    return this.http.post(url, body, { headers: headers })
      .subscribe(
        (val) => {
            console.log(val);
            console.log("POST call successful value returned in body", val);
        },
        response => {
            console.log("POST call in error", response);
        },
        () => {
            console.log("The POST observable is now completed.");
        });
  }
}

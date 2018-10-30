import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'page-transportation',
  templateUrl: 'transportation.html'
})
export class TransportationComponent {

  constructor(private translateService: TranslateService) {

  }

}

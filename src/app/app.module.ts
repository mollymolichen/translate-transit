// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

// declarations
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location';
import { LandmarksComponent } from './landmarks/landmarks.component';
import { TransportationComponent } from './transportation/transportation';
import { TranslateService } from './translate.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    NgSelectModule,
    HttpClientModule,
    MatTooltipModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    LocationComponent,
    LandmarksComponent,
    TransportationComponent
  ],
  providers: [TranslateService, LocationComponent, LandmarksComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

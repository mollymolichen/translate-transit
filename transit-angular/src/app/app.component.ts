import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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

  campuses = {
    east: {
      name: "east",
      options: ['One', 'Two', 'Three']
    },
    central: {
      name: "central",
      options: ['Four', 'Five', 'Six']
    },
    west: {
      name: "west",
      options: ['Seven', 'Eight', 'Nine']
    }
  }

  myControl = new FormControl();
  options: string[] = this.campuses.east.options;
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  updateDropdown(campus: string) {
    this.options = this.campuses[campus].options;
    this.ngOnInit();
  }
}

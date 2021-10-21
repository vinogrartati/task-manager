import { Component } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html'
})

export class BackButtonComponent {

  constructor(
    private _location: Location,
  ) { }

  goBack() {
    this._location.back();
  }
}

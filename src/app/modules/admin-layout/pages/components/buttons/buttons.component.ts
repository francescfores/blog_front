import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  buttonloading=true;

  loading() {
    this.buttonloading=!this.buttonloading;
  }
}

import { Component, VERSION } from '@angular/core';
import {MenuComponent} from './menu/menu.component'; 

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  title ='APP';
}

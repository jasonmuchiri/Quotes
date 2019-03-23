import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1,'life is short, smile while you still have teeth','Author:Sanjay',new Date(2019,2,22) ),
  ]
}

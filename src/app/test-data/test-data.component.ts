import { Component, OnInit } from '@angular/core';
import {Data} from "popper.js";

@Component({
  selector: 'app-test-data',
  template: `
    <p>
      test-data works!
    </p>
    <input type="date" [(ngModel)]="date">{{date}}<br>
    <input type="month" [(ngModel)]="month">{{month}}<br>
    <input type="week" [(ngModel)]="week">{{week}}<br>
    <input type="time" [(ngModel)]="time">{{time}}<br>
    <input type="datetime-local" [(ngModel)]="datetimeLocal">{{datetimeLocal}}
  `,
  styles: [
  ]
})
export class TestDataComponent implements OnInit {
  date:string;
  month:string;
  week:string;
  time:string;
  datetimeLocal:string;
  constructor() { }

  ngOnInit(): void {
  }

}

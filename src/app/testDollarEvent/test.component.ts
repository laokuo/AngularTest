import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  value1:string;
  type1:string;

  value2:string;
  
  value3:String;
  constructor() { }

  ngOnInit(): void {
  }
  onKey1(event:any){
    this.value1 = event.target.value;
    this.type1= typeof(event);
  }
  onKey2(boxValue:string){
    this.value2 = boxValue;
  }
  onEnter(boxValue:string){
    this.value3 = boxValue;
  }
}

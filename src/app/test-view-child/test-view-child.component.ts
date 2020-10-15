import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SonComponent} from "../son/son.component";

@Component({
  selector: 'app-test-view-child',
  template: `
  <div #helloDiv>
    你好
  </div>
  <input type="text">
  <app-son #mySon [toChild]="toChild"></app-son>

  `,
  styles: [
  ]
})
export class TestViewChildComponent implements OnInit,AfterViewInit {
  @ViewChild('helloDiv',{static:true}) helloPRef:ElementRef;
  @ViewChild('mySon') mySon:SonComponent;

  toChild:string='helloChild';
  constructor() { }

  ngOnInit(): void {
    console.log(this.helloPRef);
    this.helloPRef.nativeElement.innerHTML="hello wrold";
  }

  ngAfterViewInit(): void {
    this.mySon.sayHello();
  }


}

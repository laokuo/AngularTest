import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bootsrap',
  template: `
    <div (click)="this.isHidden=true">
      输入：<input type="text" (click)="showDrop()" name="in" [(ngModel)]="value" (keyup)="checkData()">
      <div style="background: gray;width: 200px;height: 200px;overflow-y: scroll;margin-left: 45px;position: absolute;" [hidden]="isHidden">
         <p
           (mouseleave)="doMouseLeave()"
           (mouseover)="doMouseOver(i)"
           [class.setBackgroundColor]="this.selectData==i"
           style="margin: 0 0;padding: 0 0;display: block "
           *ngFor="let data of datas;let i =index" (click)="bind($event)"
           value="{{data}}" >
           {{data}}
         </p>
      </div>
      <div>
        <p>fsdfjsaldkfjawoiejfskdjfwoeihgosdihfwiefsdjfjwef</p>
      </div>
    </div>
  `,
  styles: [
    `
      .setBackgroundColor{
        background: burlywood;
      }
    `
  ]
})
export class TestBootsrapComponent implements OnInit {
  isHidden: boolean = true;
  value: string;
  datas: string[]=["1","2","3","4","5","6","7","8","9","10","111","323","16456","1789","6451","1123","178","1456","1123","1312"];
  mouseOver: boolean=false;
  selectData:number=-1;


  constructor() { }

  ngOnInit(): void {
  }

  showDrop() {
    this.isHidden=false;
  }

  bind(event) {
    this.value=event.target.value;
    this.isHidden=true;
  }

  checkData() {

  }

  doMouseOver(i:number) {
    this.selectData=i;
  }

  doMouseLeave() {
    this.selectData=-1;
  }
}

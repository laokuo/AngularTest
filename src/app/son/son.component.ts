import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-son',
  template: `
    <p>
      son works!{{toChild}}
    </p>
  `,
  styles: [
  ]
})
export class SonComponent implements OnInit {
  private _toChild: string;
  @Input()
  set toChild(toChild:string){
    console.log(toChild)
    this._toChild = "set修改之后的值";
  }
  get toChild():string{return this._toChild}
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(){
    console.log("我是子组件的sayHello函数")
  }

}

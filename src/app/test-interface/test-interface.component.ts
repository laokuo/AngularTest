import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-interface',
  template: `
  <p> 测试接口:</p>
  example1:
  <p>姓名：{{testInterface.name}}</p>
   <p>年龄：{{testInterface.age}}</p>
   <p>性别：{{testInterface.sex}}</p>
   example2:
   <p>{{testInterface2[1]}},{{testInterface2[2]}}</p>
  `,
  styles: []
})
export class TestInterfaceComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

  testInterface:MyInterface={
    name:"tianlu",
    sex:"男",
    age:23,
  }
  testInterface2:myMap={
    1:"hello1",
    2:"hello2",
    3:"hello3"
  }
}
export interface MyInterface{
  name:string;
  age?:number;
  readonly sex:string;
}

export interface myMap{
  [index:number]:string;
}

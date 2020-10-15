import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-check',
  template: `
    <br>
    <br>
    测试表单校验
    <hr>
    <form #myForm="ngForm">
      <!--    #name="ngModel" 把 NgModel 导出成了一个名叫 name 的局部变量。NgModel 把自己控制的 FormControl 实例的属性映射出去，让你能在模板中检查控件的状态，比如 valid 和 dirty-->
      name:<input id="name" name="name" class="form-control" required minlength="4" [(ngModel)]="this.name"  #myName="ngModel">
      <!--    如果用户尚未修改 UI 中的值，则该控件是 pristine（原始状态）的-->
      <!--    当用户在被监视的字段中修改该值时，控件就会被标记为 dirty（脏）-->
      <!--    当用户的表单控件失去焦点时，该控件就会被标记为 touched（已接触）-->
      age: <input name="hello" minlength="4">
      <div *ngIf="myName.invalid && myName.dirty"
           class="alert alert-danger">
        <div *ngIf="myName.errors.required">
          Name is required.
        </div>
        <!--      minlength好像必须输入了才能验证-->
        <div *ngIf="myName.errors.minlength">
          Name must be at least 4 characters long.
        </div>
      </div>
      <button [disabled]="myForm.invalid">hello world</button>
    </form>
    <!--表单进行双向绑定的时候必须要有name属性,双向绑定才能用#来验证自身有效性。不用双向绑定，井号form就能验证其中的有效性-->

    <br>
    <br>
  `,
  styles: [`
  .alert{
    color: red;
  }

  `
  ]
})
export class TestCheckComponent implements OnInit {
  name:string;

  constructor() { }

  ngOnInit(): void {

  }

}


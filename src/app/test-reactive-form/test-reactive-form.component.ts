import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-test-reactive-form',
  templateUrl: './test-reactive-form.component.html',
  styleUrls: ['./test-reactive-form.component.css']
})
export class TestReactiveFormComponent implements OnInit {

  name = new FormControl('');
  // //创建一个formgroup实例
  // profileForm = new FormGroup({
  //   firstName: new FormControl('初始值'),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });
  //用FormBuilder创建formgroup control()、group() 和 array()生成 FormControl、FormGroup 和 FormArray
  profileForm = this.fb.group({
    firstName: ['',Validators.required], //页面加也有效 建议组合使用？
    lastName: ['初始值'],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  updateName() {
    this.name.setValue('Nancy');
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }
}

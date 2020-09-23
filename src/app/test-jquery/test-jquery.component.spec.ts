import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJQueryComponent } from './test-jquery.component';

describe('TestJQueryComponent', () => {
  let component: TestJQueryComponent;
  let fixture: ComponentFixture<TestJQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
